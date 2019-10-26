'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
    padEnd: (number) => {
        let str = number.toString();

        switch(str.length) {
            case 1: 
                str = str + "0:00";
                break;
            case 2:
                str = str + ":00";
                break;
            case 4:
                str = str + "0";
                break;
        }

        return str.replace(".", ":");
    }
};
