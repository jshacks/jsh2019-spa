'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */
const _ = require('lodash');
const padEnd = require("../services/Group").padEnd;

module.exports = {
    personal: async (ctx) => {
        const group = await Group.findOne({_id: ctx.state.user.groupId});

        ctx.status = 200
        ctx.body = {group: group.name}
    },
    schedule: async (ctx) => {
        const groupActivities = await Activity.find({groupId: ctx.state.user.groupId});
        const attendences = await Attendence.find({userId: ctx.state.user._id}).where({
            subject: groupActivities.map(activity => activity.subject)
        });

        const activities = groupActivities.map(activity => {
            const attendence = attendences.filter(attendence => attendence.subject === activity.subject).length;
            return {...activity._doc, attendence: attendence};
        });

        const sorted = _.sortBy(activities, ["start"])
        const grouped = _.groupBy(sorted, function(ob) {
            return ob.day;
        });

        Object.keys(grouped).map(day => {
            grouped[day].forEach(activity => {
                activity.start = padEnd(activity.start);
                activity.end = padEnd(activity.end);
            })
        })

        ctx.body = {activities: grouped}
    }
};
