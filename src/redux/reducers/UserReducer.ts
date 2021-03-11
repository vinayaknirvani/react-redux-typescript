import { UserDispatchTypes } from "../actions/users/UserActionTypes";
import { IUserStore } from "../models/IUserStore";

const users: IUserStore = {
  users: [],
};

const userReducer = (
  state: IUserStore = users,
  action: UserDispatchTypes
): IUserStore => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.user] };
  }
  return state;
};

export default userReducer;
