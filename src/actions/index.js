import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=vijayTestsingh1';

export function fetchPosts() {

  const posts = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: posts
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => { callback() });
  
  return {
    type: CREATE_POST,
    payload: request
  };
}
