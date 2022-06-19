import { combineReducers } from "redux";
import postsReducer from './postsReducer'
import usersReducer from "./usersReducer";


// const  postsReducer = (posts = [], action) =>{
//     if(action.type === 'FETCH_POSTS '){
//         return [...posts, action.payload];
//     }
//     return posts;
// }

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});