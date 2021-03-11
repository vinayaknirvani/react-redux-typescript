import {
  GlobalDispatchTypes,
  LOADING_RESET,
  LOADING_SET,
  SET_DARK_MODE
} from "../actions/global/GlobalActionTypes";
import { IGlobalStore } from "../models/IGlobalStore";

const globals: IGlobalStore = {
  loading: false,
  dark: false,
};

const globalReducer = (
  state: IGlobalStore = globals,
  action: GlobalDispatchTypes
): IGlobalStore => {
  switch (action.type) {
    case LOADING_SET:
      return { ...state, loading: true };
    case LOADING_RESET:
      return { ...state, loading: false };
    case SET_DARK_MODE:
      return { ...state, dark: action.dark };
  }
  return state;
};

export default globalReducer;
