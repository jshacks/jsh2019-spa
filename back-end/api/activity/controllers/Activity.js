'use strict';
const groupArray = require('group-array');
const _ = require('lodash');
const checkIfToday = require('../services/Activity').checkIfToday;
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

        //sort
        //group
        //format start: end

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
    },
    getProfActivities: async (ctx) => {
        const fullname = ctx.state.user.firstname + " " + ctx.state.user.lastname;
        const activities = await Activity.find({prof: fullname});

        const sorted = _.sortBy(activities, ["start"])
        const grouped = _.groupBy(sorted, function(ob) {
            return ob.day;
        });

        ctx.body = {activities: grouped};
    },
    getStudents: async (ctx) => {
        //incomplete
        const schedules = await Schedule.find({activityId: ctx.params.activityId});
        const students = await User.find().where({
            _id: schedules.map(schedule => schedule.userId)
        })

        console.log(students);

        ctx.body = "yas"
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
