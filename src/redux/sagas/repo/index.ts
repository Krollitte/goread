import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  ListRepositories,
  getRepoListSuccess,
  getRepoListFailure,
} from "../../actions";
import * as types from "../../types";
import { api } from "../../../service/api";

let repositories: ListRepositories[];
const getListRepo = async (searchTerm: string) => {
  try {
    const response = await api.get(`${searchTerm}&per_page=10`);

    repositories = response.data.items;
    return true;
  } catch (error) {
    return false;
  }
};

export function* repositoriesData(action: { type: string; payload: any }) {
  try {
    yield call(getListRepo, action.payload);
    yield put(getRepoListSuccess(repositories));
  } catch (error) {
    yield put(getRepoListFailure("Falha na busca por repositórios"));
  }
}

export default all([takeLatest(types.REPO_SEARCH, repositoriesData)]);
