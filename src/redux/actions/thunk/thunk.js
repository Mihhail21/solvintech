// import { getUserAction } from "../userAction";
// import axios from 'axios'

// export const getUsersFromApi = () => async (dispatch) => {

// const response = await axios.get('https://layout.solvintech.ru/nuxt/api')
//   console.log(response.data);
//   dispatch(getUserAction(response.data))
// }
import { getUserAction } from "../userAction";

export const getUsersFromApi = () => async (dispatch) => {
  fetch('https://layout.solvintech.ru/nuxt/api/',{
    method: "GET",
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }})
    .then(results => results.json())
    .then((data) => dispatch(getUserAction(data)))
};
