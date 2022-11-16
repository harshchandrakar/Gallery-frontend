import {
  LOGIN_SUCCESSFUL,
  UPDATED_ID,
  UPDATED_POSTS,
  UPDATE_ISSUE,
} from "../actions/actionTypes";

const initialAuthState = {
  isLogged: false,
  id: "",
  posts: [],
  error: {
    issue: true,
    message: "",
  },
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLogged: action.data,
      };
    case UPDATED_ID:
      return {
        ...state,
        id: action.data,
      };
    case UPDATED_POSTS:
      return {
        ...state,
        posts: action.data,
      };
    case UPDATE_ISSUE:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
}
