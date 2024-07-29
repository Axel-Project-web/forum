//mysql
const { query } = require('../mysql/mysql.connection');

//events
const { GET_ALL_MESSAGES_EVENT, ERROR_SERVER } = require('../constanst/events');

//query
const { GET_ALL_MESSAGES_QUERY } = require('../constanst/queries');

async function emitAllMessages(socket) {
    try {
        const response = await query({ query: GET_ALL_MESSAGES_QUERY });
        socket.emit(GET_ALL_MESSAGES_EVENT, response);
    } catch (error) {
        console.log(error);
        console.log("ERROR AT FILE <socket.controller.js>");
        socket.emit(GET_ALL_MESSAGES_EVENT, []);
    }
};

module.exports = { emitAllMessages };