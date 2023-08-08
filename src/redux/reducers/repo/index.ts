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
        repoList: [],
        error: "",
      };
    case types.REPO_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        repoList: action.payload as ListRepositories[],
        error: "",
      };
    case types.REPO_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.REPO_SELECT:
      return {
        ...state,
        selectedRepo: action.payload,
      };

    default:
      return state;
  }
};
