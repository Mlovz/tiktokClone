import { POST_TYPES } from "../actions/postAction";

const initialState = {
  loading: false,
  get_load: false,
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POST_TYPES.GET_LOADING:
      return {
        ...state,
        get_load: action.payload,
      };
    case POST_TYPES.CREATE_POST:
      return {
        ...state,
        posts: [action.payload.newPost, ...state.posts],
      };
    case POST_TYPES.GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
};

export default postReducer;
