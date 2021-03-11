import { Dispatch } from "redux";
import {
  GlobalDispatchTypes,
  LOADING_RESET,
  LOADING_SET,
  SET_DARK_MODE
} from "./GlobalActionTypes";

export const SetLoader = () => async (
  dispatch: Dispatch<GlobalDispatchTypes>
) => {
    dispatch({
      type: LOADING_SET
    });
};
export const ResetLoader = () => (dispatch: Dispatch<GlobalDispatchTypes>) => {
  dispatch({
    type: LOADING_RESET
  });
};

export const SetDarkMode = (dark: boolean) => (
  dispatch: Dispatch<GlobalDispatchTypes>
) => {
  dispatch({
    type: SET_DARK_MODE,
    dark: dark
  });
};

