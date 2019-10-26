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
    }
};
