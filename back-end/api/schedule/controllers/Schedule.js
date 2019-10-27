'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */
const _ = require('lodash');
const padEnd = require('../../group/services/Group').padEnd;

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
    generate: async (ctx) => {
        ctx.body = "yas"
    }
};
