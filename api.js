import axios from 'axios';

const BASE_URL = 'http://localhost:3000/posts';

export const fetchPosts = () => axios.get(BASE_URL);
export const createPost = (data) => axios.post(BASE_URL, data);
export const updatePost = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deletePost = (id) => axios.delete(`${BASE_URL}/${id}`);
