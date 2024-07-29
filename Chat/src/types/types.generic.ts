//for each message
interface MessageType {
  id: string;
  message: string;
  username: string;
}

type MessagesType = Array<MessageType>;

export type {
  MessageType,
  MessagesType,
}