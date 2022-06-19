import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () =>
  // {
  //   return async function(dispatch, getState) {
  //     const response = await jsonplaceholder.get("/posts");
  //     dispatch({ type: "FETCH_POSTS", payload: response });
  //   };
  // };

  //return a function in an action creator
  async (dispatch, getState) => {
    const response = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data }); //manually call dispatch function
  };

// export const fetchUser = (userId) =>
// async dispatch => {
//     const response = await jsonplaceholder.get(`/users/${userId}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });//manually call dispatch function
// };

export const fetchUser = (userId) => (dispatch, getState) => _fetchUser(userId, dispatch);

const _fetchUser = _.memoize(async (userId, dispatch) => {//memoized function to avoid refetching already fetched users
  const response = await jsonplaceholder.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: response.data }); //we manually dispatch an  action
});
