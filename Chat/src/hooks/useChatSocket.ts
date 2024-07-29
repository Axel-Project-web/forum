//react
import { useState } from "react";

//socket.io
import {io, Socket} from "socket.io-client";

//types
import { MessagesType } from "../types/types.generic";

//events
import { NEW_MESSAGE_EVENT, GET_ALL_MESSAGES_EVENT, INCOMING_MESSAGE_EVENT } from "../constants/events";

//interface
interface useChatSocketType {
    messages: MessagesType;
    sendMessage: (messageToSend: any)=> void; 
}

//sockets
import { SERVER_URL } from "../constants/endpoints";

//constans
const INIT_STATE: MessagesType = [];
const socket: Socket = io(SERVER_URL);

function useChatSocket(): useChatSocketType {
    const [messages, setMessages] = useState<MessagesType>(INIT_STATE);
    
    socket.on(NEW_MESSAGE_EVENT, (data: MessagesType)=> setMessages(data));
    socket.on(GET_ALL_MESSAGES_EVENT, (data: MessagesType)=> setMessages(data));

    function sendMessage(messageToSend: any) {
        socket.emit(INCOMING_MESSAGE_EVENT, messageToSend, (status: any)=> console.log(status));
    }

    return {
        messages,
        sendMessage
    };
}

export { useChatSocket };