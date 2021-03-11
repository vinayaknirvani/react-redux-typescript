
export const LOADING_SET = "LOADING_SET";
export const LOADING_RESET = "LOADING_RESET";
export const SET_DARK_MODE = "SET_DARK_MODE";

export interface LoadingSet {
  type: typeof LOADING_SET;
}

export interface LoadingReset {
  type: typeof LOADING_RESET;
}

export interface SetDarkMode {
  type: typeof SET_DARK_MODE;
  dark: boolean;
}


export type GlobalDispatchTypes = LoadingSet | LoadingReset | SetDarkMode;
