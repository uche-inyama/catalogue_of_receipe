const axios = require("axios").default;

export const FILTER_ITEM = "FILTER_ITEM";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALIDATE_RECIPE = "INVALIDATE_RECIPE";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REQUEST_RECIPE = "REQUEST_RECIPE";

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivePosts = (data) => ({
  type: RECEIVE_POSTS,
  posts: data.results,
  receivedAt: Date.now(),
});

export const receiveRecipe = (data) => ({
  type: RECEIVE_RECIPE,
  recipe: data.analyzedInstructions,
});

export const requestRecipe = () => ({
  type: REQUEST_RECIPE,
});

export const filterItem = (searchText) => ({
  type: FILTER_ITEM,
  searchText,
});

export const invalidateRecipe = () => ({
  type: INVALIDATE_RECIPE,
});

export function getRecipeDetails(id) {
  const apiKey = "d9be2fa66d25427b9e449d7514872458";
  return (dispatch) => {
    dispatch(requestRecipe());
    return axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      )
      .then(({ data }) => dispatch(receiveRecipe(data)));
  };
}

export function fetchPosts() {
  const apiKey = "d9be2fa66d25427b9e449d7514872458";
  return (dispatch) => {
    dispatch(requestPosts());
    return axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&number=20`
      )
      .then(({ data }) => data)
      .then((data) => {
        dispatch(receivePosts(data));
      });
  };
}
