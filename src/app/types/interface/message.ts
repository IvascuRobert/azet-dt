import { MessageType } from "../enum/message-type";

export interface Message {
    type: MessageType;
    message: string;
}
