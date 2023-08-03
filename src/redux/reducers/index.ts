import { combineReducers } from "redux";

import { repoReducer } from "./repo";

export const rootReducer = combineReducers({
  repo: repoReducer,
});
