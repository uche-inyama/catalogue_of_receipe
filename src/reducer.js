import { combineReducers } from 'redux';
import { VIEW_ITEM_DETAIL, FILTER_ITEM } from './actions';

const initialState = {
  filter: [],
  items: [
    {
      name: 'Spagetti',
      ingredients: [],
      recipe: [],
    },
  ],
};

const selectItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_ITEM_DETAIL:
      return action.id;
    default:
      return state;
  }
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ITEM:
      return action.ingredients;
    default:
      return state;
  }
};

const reducer = combineReducers({
  selectItemReducer,
  filterReducer,
});

export default reducer;
