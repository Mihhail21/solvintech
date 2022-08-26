import { GET_USERS } from "../types/types.User";

export const getUserAction = (oneUser) => ({
  type: GET_USERS,
  payload: oneUser
});
