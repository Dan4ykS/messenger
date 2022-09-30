import { Blob } from 'buffer';

export enum MessageType {
  audio = 'audio',
  file = 'file',
  text = 'text',
  video = 'video',
}

export interface IMessageContent {
  [MessageType.audio]: Blob;
  [MessageType.file]: Blob;
  [MessageType.text]: string;
  [MessageType.video]: Blob;
}

export interface IMessage<TMessage extends MessageType> {
  author: string;
  content: IMessageContent[TMessage];
  date: string;
  id: string;
  type: TMessage;
}

export interface IChat {
  createdDate: string;
  id: string;
  messages: string[];
  users: string[];
}
