import { combineReducers } from 'redux';
import { INITIALIZE_ITEMS, FILTER_ITEM } from './actions';

const initialState = {
  filter: 'All',
  items: [
    {
      name: 'Spagetti',
      ingredients: [],
      recipe: [],
    },
  ],
};

// const selectItemReducer = (state = [], action) => {
//   switch (action.type) {
//     case VIEW_ITEM_DETAIL:
//       state.items.filter((item, index) => {
//         if (index === action.id) {
//           return state.items[index];
//         }
//       });
//       break;
//     default:
//       return state;
//   }
// };

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_ITEMS:
      return [...state, ...action.itemsArray];
    default:
      return state;
  }
};

const filterReducer = (state = 'All', action) => {
  if (action.type === FILTER_ITEM) {
    if (action.filter === 'All') {
      return {
        ...action.state,
        items: action.state.items,
        filter: action.filter,
      };
    }
    return {
      ...action.state,
      items: action.state.items.ingredients.filter(
        (ingredient) => ingredient === action.filter,
      ),
      filter: action.filter,
    };
  }
  return state;
};

const reducer = combineReducers({
  filter: filterReducer,
  items: itemsReducer,
});

export default reducer;
