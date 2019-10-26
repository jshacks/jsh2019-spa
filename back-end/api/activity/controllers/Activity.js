'use strict';
const groupArray = require('group-array');
const _ = require('lodash');
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

        const grouped = _.groupBy(availableActivities, function(ob) {
            return ob.subject;
        });

        ctx.body = {activities: grouped}
    }
};
