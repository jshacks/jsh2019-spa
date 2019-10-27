'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
    checkIfToday: (firstDate) => {
        const secondDate = new Date();
        return firstDate.getFullYear() === secondDate.getFullYear() &&
            firstDate.getMonth() === secondDate.getMonth() &&
            firstDate.getDate() === secondDate.getDate();
    },
    mapDto: (activities) => {
        return activities.map(activity => {
            let ob = {};
            ob.minAttendence = activity.minAttendence;
            ob.capacity = activity.capacity;
            ob.subject = activity.subject;
            ob.start = activity.start;
            ob.end = activity.end;
            ob.day = activity.day;
            ob.classroom = activity.classroom;
            ob.type = activity.type;
            ob.prof = activity.prof;
            ob.id = activity.id;
            return ob;
        });
    },
    sortByDay: (a, b) => {
        const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
        return daysOfWeek.indexOf(a.day) > daysOfWeek.indexOf(b.day);
    }
};
