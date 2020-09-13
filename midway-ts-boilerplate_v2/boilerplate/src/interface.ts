/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  id: number;
}

/**
 * @description User-Service response
 */
export interface IUserResult {
  id: number;
  username: string;
  phone: string;
  email?: string;
}
