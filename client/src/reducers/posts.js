import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH } from "../constants/actionTypes";

export default (posts = [], action) => {
   switch (action.type) {
            // return all posts but filter out the deleted post then dispatch the action in components//
        case FETCH_ALL:
           return action.payload;
        case DELETE:
              return posts.filter((post) => post._id !== action.payload)
            // action.payload will be the updated post otherwise just return the post without updates //
        case UPDATE:
           // both update and like cases can do the same thing if not they will return the original post //  
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case CREATE:
            return [...posts, action.payload];
        case FETCH:
              return action.payload;


       default:
           return posts;
   }
}