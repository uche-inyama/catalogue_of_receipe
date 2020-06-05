import { combineReducers } from "redux";
import {
  FILTER_ITEM,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  INVALIDATE_RECIPE,
  RECEIVE_RECIPE,
  REQUEST_RECIPE,
} from "./actions";

const recipePosts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    results: [],
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_RECIPE:
      return { ...state, didInvalidate: true };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        results: action.posts,
      };
    default:
      return state;
  }
};

const detailedRecipeReducer = (
  state = {
    isFetching: false,
    recipe: null,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_RECIPE:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_RECIPE:
      return {
        ...state,
        isFetching: false,
        recipe: action.recipe,
      };
    default:
      return state;
  }
};

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_ITEM:
      return {
        ...state,
        searchText: action.searchText,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  filter: filterReducer,
  recipes: recipePosts,
  detailedRecipe: detailedRecipeReducer,
});

export default reducer;
