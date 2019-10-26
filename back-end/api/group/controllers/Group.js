'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

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
        })

        ctx.body = {activities: activities}
    }
};
