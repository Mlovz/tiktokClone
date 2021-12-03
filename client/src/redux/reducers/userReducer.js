import { PROFILE_TYPES } from "../actions/profileAction";

const initialState = {
  loading: false,
  users: [],
  firstLoad: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.GET_USERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.users,
        firstLoad: true
      };
      default:
          return state
  }
};

export default userReducer