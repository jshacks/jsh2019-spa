'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

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
            activities[i].activity = await Activity.find({_id: activities[i].activityId});
        }

        ctx.body = {activities: activities}
    }
};
