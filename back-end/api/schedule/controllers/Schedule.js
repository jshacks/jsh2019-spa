'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */
const _ = require('lodash');
const padEnd = require('../../group/services/Group').padEnd;
const findSuitableActivities = require('../services/Schedule').findSuitableActivities;
const isConflictant = require('../services/Schedule').isConflictant;
const sortByDay = require('../../activity/services/Activity').sortByDay;
const mapDto = require('../../activity/services/Activity').mapDto;

module.exports = {
    personal: async (ctx) => {
        const personalActivities = await Schedule.find({userId: ctx.state.user._id});
        const attendences = await Attendence.find({userId: ctx.state.user._id}).where({
            subject: personalActivities.map(activity => activity.subject)
        });

        const activities = personalActivities.map(activity => {
            const attendence = attendences.filter(attendence => attendence.subject === activity.subject).length;
            return {...activity._doc, attendence: attendence};
        })

        for(let i = 0; i < activities.length; i++) {
            const activity = await Activity.findOne({_id: activities[i].activityId});
            activities[i].subject = activity.subject; 
            activities[i].minAttendence = activity.minAttendence; 
            activities[i].type = activity.type;
            activities[i].day = activity.day;
            activities[i].start = activity.start;
            activities[i].end = activity.end;
            activities[i].prof = activity.prof;
        }

        const sorted = _.sortBy(activities, ["start"])
        const grouped = _.groupBy(sorted, function(ob) {
            return ob.day;
        });

        Object.keys(grouped).map(day => {
            grouped[day].forEach(activity => {
                activity.start = padEnd(activity.start)
                activity.end = padEnd(activity.end);
            })
        })

        ctx.body = {activities: grouped}
    },
    create: async (ctx) => {
        await Schedule.deleteMany({userId: ctx.state.user._id});
        
        if(ctx.request.body.activities && Array.isArray(ctx.request.body.activities)) {
            const activities = [];
            ctx.request.body.activities.forEach(activity => {
                activities.push({userId: ctx.state.user._id, activityId: activity, user: ctx.state.user._id});
            })
            await Schedule.create(activities);
            ctx.body = {message: "Updated"};
        } else {
            ctx.status = 400;
            ctx.body = {message: "Bad Request"};
            return;
        }
    },
    initialize: async (ctx) => {
        const schedules = await Schedule.find();
        const studentsWithSchedules = new Set(schedules.map(schedule => schedule.userId));

        //nin doesnt work...
        const students = await strapi.plugins["users-permissions"].models.user.find({
            type: {
                $in: ["stud", "groupLead", "seriesLead"]
            }
        });

        const studentsWithoutSchedules = students.filter(student => !studentsWithSchedules.has(student.id));

        for(let i = 0; i < studentsWithoutSchedules.length; i++) {
            const groupActivities = await Activity.find({groupId: studentsWithoutSchedules[i].groupId});
            const groupSchedules = groupActivities.map(activity => {
                return {userId: studentsWithoutSchedules[i].id, activityId: activity.id}
            });
            await Schedule.create(groupSchedules);
        }

        ctx.status = 201
        ctx.body = {message: "Updated"}
    },
    generate: async (ctx) => {
        const busy = ctx.request.body.busy.map(day => {
            return {start: parseFloat(day.start.replace(":", ".")), end: parseFloat(day.end.replace(":", "."))};
        });

        const groupActivities = await Activity.find({groupId: ctx.state.user.groupId});
        const groupActivitiesWithoutConflicts = findSuitableActivities(groupActivities, busy);
        const groupActivitiesWithConflicts = groupActivities.filter(activity => !groupActivitiesWithoutConflicts.includes(activity));
        const finalActivities = groupActivities;

        for(let i = 0; i < groupActivities.length; i++) {
            if(groupActivitiesWithConflicts.includes(groupActivities[i])) {
                const similarActivities = await Activity.find({
                    type: groupActivities[i].type,
                    subject: groupActivities[i].subject
                });

                const suitableActivities = findSuitableActivities(similarActivities, busy);
                
                for(let j = 0; j < suitableActivities; j++) {
                    if(!isConflictant(finalActivities, suitableActivities[j])) {
                        finalActivities[i] = suitableActivities[j];
                    }
                }
            }
        }

        const mapper = mapDto(finalActivities)
        const sorted = _.sortBy(mapper, ["start"]);
        sorted.sort(sortByDay);
        const grouped = _.groupBy(sorted, function(ob) {
            return ob.subject;
        });

        Object.keys(grouped).map(day => {
            grouped[day].forEach(activity => {
                activity.start = padEnd(activity.start)
                activity.end = padEnd(activity.end);
            })
        });

        _.forEach(grouped, (value, key) => {
            grouped[key] = _.groupBy(grouped[key], (item) => {
                return item.type;
            })
        })

        ctx.body = { schedule: grouped };
    }
};
