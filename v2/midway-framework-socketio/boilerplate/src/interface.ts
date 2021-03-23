/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export enum SocketRequestEvent {
  GREET = 'greet',
}

export enum SocketResponseEvent {
  GREET = 'greet',
}