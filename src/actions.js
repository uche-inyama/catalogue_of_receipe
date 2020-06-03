const axios = require('axios').default;

export const FILTER_ITEM = 'FILTER_ITEM';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_RECIPE = 'INVALIDATE_RECIPE';

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivePosts = (data) => ({
  type: RECEIVE_POSTS,
  posts: data.results,
  receivedAt: Date.now(),
});

export const filterItem = (searchText) => ({
  type: FILTER_ITEM,
  searchText,
});

export const invalidateRecipe = () => ({
  type: INVALIDATE_RECIPE,
});

export function fetchPosts() {
  const apiKey = 'd9be2fa66d25427b9e449d7514872458';
  return (dispatch) => {
    dispatch(requestPosts());
    return axios
      .get(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}`)
      .then(({ data }) => data)
      .then((data) => {
        dispatch(receivePosts(data));
      });
  };
}
