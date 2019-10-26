'use strict';
const groupArray = require('group-array');
const _ = require('lodash');
/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    activitiesPerSubject: async (ctx) => {
        const activities = await Activity.find();
        const grouped = _.groupBy(activities, function(ob) {
            return ob.subject;
        });

        ctx.body = {activities: grouped}
    }
};
