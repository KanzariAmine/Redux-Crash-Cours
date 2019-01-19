import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => async dispatch => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts `)
  const posts = await response.json();
  dispatch({
    type: FETCH_POSTS,
    payload: posts
  });
}

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      postData
    })
  })
    .then(response => response.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }))
}