import * as types from "../../types";
import { ListRepositories } from "../../actions/repo";

interface initialState {
  repoList: ListRepositories[];
  selectedRepo: string;
  error?: string;
  loading: boolean;
}

const initialState: initialState = {
  repoList: [] as ListRepositories[],
  selectedRepo: "",
  error: "",
  loading: false,
};

export const repoReducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case types.REPO_SEARCH:
      return {
        ...state,
        loading: true,
        repoList: [...state.repoList, ...action.payload],
        error: "",
      };
    case types.REPO_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        repoList: [...state.repoList, action.payload],
        error: "",
      };
    case types.REPO_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
