import { Dispatch } from "redux";
import { IUser } from "../../models/IUser";
import {
  ADD_USER, UserDispatchTypes
} from "./UserActionTypes";

export const AddUser = (user: IUser) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
    dispatch({
      type: ADD_USER,
      user: user
    });
};
