'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
    findSuitableActivities: (groupActivities, busy) => {
        return groupActivities.filter(activity => {
            switch(activity.day) {
                case "monday":
                    return activity.start < busy[0].start || activity.start > busy[0].end;
                case "tuesday":
                    return activity.start < busy[1].start || activity.start > busy[1].end;                    
                case "wednesday":
                    return activity.start < busy[2].start || activity.start > busy[2].end;                    
                case "thursday":
                    return activity.start < busy[3].start || activity.start > busy[3].end;
                case "friday":
                    return activity.start < busy[4].start || activity.start > busy[4].end;
            }
        });
    },
    isConflictant: (activities, activity) => {
        for(let i = 0; i < activities.length; i++) {
            if(activity.day === activities[i].day && activity.start === activities[i].start) {
                return true;
            }
        }

        return false;
    }
};
