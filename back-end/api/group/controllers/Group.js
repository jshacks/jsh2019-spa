'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    personal: async (ctx) => {
        const group = await Group.findOne({_id: ctx.state.user.groupId});

        ctx.status = 200
        ctx.body = {group: group.name}
    }
};
