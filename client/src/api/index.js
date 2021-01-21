import axios from 'axios';


// url leading to back end route // 
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// api request with cb function for entire post to specify url and data sent which is the entire new post //  
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
<<<<<<< HEAD
=======

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
>>>>>>> cee69cc36604d5eb191ba1e9ac9f6a40fdf40826
