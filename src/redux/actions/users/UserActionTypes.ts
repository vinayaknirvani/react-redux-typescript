import { IUser } from "../../models/IUser";

export const ADD_USER = "ADD_USER";

export interface AddUser {
  type: typeof ADD_USER;
  user: IUser
}

export type UserDispatchTypes = AddUser;
