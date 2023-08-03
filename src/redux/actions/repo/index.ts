import * as types from "../../types";

export interface ListRepositories {
  id: number;
  name: string;
  owner: {
    id: number;
    login: string;
    avatar_url: string;
  };
  stargazers_url: string;
}

export function getRepoList(searchTerm: string): {
  type: string;
  payload: string;
} {
  return {
    type: types.REPO_SEARCH,
    payload: searchTerm,
  };
}

export function getRepoListSuccess(resultList: ListRepositories[]): {
  type: string;
  payload: ListRepositories[];
} {
  return {
    type: types.REPO_SEARCH_SUCCESS,
    payload: resultList,
  };
}

export function getRepoListFailure(error: string): {
  type: string;
  payload: string;
} {
  return {
    type: types.REPO_SEARCH_FAILURE,
    payload: error,
  };
}
