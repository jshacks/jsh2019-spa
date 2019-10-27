'use strict';
const _ = require('lodash');
const checkIfToday = require('../services/Activity').checkIfToday;
const padEnd = require('../../group/services/Group').padEnd;
const mapDto = require("../services/Activity").mapDto;
const sortByDay = require('../services/Activity').sortByDay;

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    activitiesPerSubject: async (ctx) => {
        const groupActivities = await Activity.find({groupId: ctx.state.user.groupId});
        const subjectsList = groupActivities.map(activity => activity.subject);

        const activities = await Activity.find().where({
            subject: subjectsList
        });

        const availableActivities = [];
        for(let i = 0; i < activities.length; i++){
            const activity = activities[i];
            const scheduledActivities = await Schedule.find({activityId: activity._id}).countDocuments();
            if( scheduledActivities < activity.capacity) {
                availableActivities.push(activity);
            }
        }

        const mapper = mapDto(availableActivities);
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
                console.log(item);
                return item.type;
            })
        })

        ctx.body = {activities: grouped}
    },
    getProfActivities: async (ctx) => {
        const fullname = ctx.state.user.firstname + " " + ctx.state.user.lastname;
        const activities = await Activity.find({prof: fullname});

        const mapper = mapDto(activities);
        const sorted = _.sortBy(mapper, ["start"])
        const grouped = _.groupBy(sorted, function(ob) {
            return ob.day;
        });

        Object.keys(grouped).map(day => {
            grouped[day].forEach(activity => {
                activity.start = padEnd(activity.start)
                activity.end = padEnd(activity.end);
            })
        })

        ctx.body = {activities: grouped};
    },
    getStudents: async (ctx) => {
        const today = new Date(new Date().setHours(0, 0, 0, 0));
        const attendences = await Attendence.find({activityId: ctx.params.activityId, createdAt: {$gte: today}});
        const schedules = await Schedule.find({activityId: ctx.params.activityId});
        const students = await strapi.plugins["users-permissions"].models.user.find({
            _id: schedules.map(schedule => schedule.userId)
        });

        const enrichedStudents = 
            students.map(student => {
                const enrichedStudent = { firstname: student.firstname, lastname: student.lastname, isPresent: false };
                const attendence = attendences.filter(attendence => attendence.userId == student._id).length;

                if(attendence) {
                    enrichedStudent.isPresent = true;
                }

                return enrichedStudent;
        });

        ctx.body = {students: enrichedStudents}   
    },
    studentAttendence: async (ctx) => {
        const attendence = await Attendence.findOne({userId: ctx.params.userId, activityId: ctx.params.activityId, profId: ctx.state.user._id});
        
        if(attendence && checkIfToday(new Date(attendence.createdAt))) {
            await Attendence.deleteOne({userId: ctx.params.userId, activityId: ctx.params.activityId, profId: ctx.state.user._id});
        } else {
            const activity = await Activity.findOne({_id: ctx.params.activityId});
            await Attendence.create({userId: ctx.params.userId, activityId: ctx.params.activityId, profId: ctx.state.user._id, 
                subject: activity.subject});
        }

        ctx.body = {message: "Updated"}
    }
};
