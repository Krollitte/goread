import { all } from "redux-saga/effects";

import repo from "./repo";

export default function* rootSaga(): Generator<any> {
  return yield all([repo]);
}
