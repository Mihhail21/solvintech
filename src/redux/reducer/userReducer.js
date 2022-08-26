import initState from "../initState";
import { GET_USERS } from "../types/types.User";

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload
    default: return state
  }
};
