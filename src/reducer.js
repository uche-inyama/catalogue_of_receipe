import { combineReducers } from "redux";
import { INITIALIZE_ITEMS, FILTER_ITEM } from "./actions";

const initialState = {
  searchText: "",
  items: [
    {
      id: 1,
      name: "DECANDENT FALL DESSERT",
      ingredients: [],
      recipe: ["aba", "ada", "chika"],
    },
  ],
};

export const itemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case INITIALIZE_ITEMS:
      return [...state, ...action.itemsArray];
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
  items: itemsReducer,
});

export default reducer;
