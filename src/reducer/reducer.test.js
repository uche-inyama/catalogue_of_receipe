import { createStore } from 'redux';
import {
  reducer,
  recipePosts,
  detailedRecipeReducer,
} from './reducer';

import {
  requestPosts,
  receivePosts,
  requestRecipe,
  receiveRecipe,

} from '../action/actions';

describe('reducers', () => {
  const store = createStore(reducer);
  it('should return the initail state', () => {
    expect(reducer(undefined, {})).toEqual({
      detailedRecipe: { isFetching: false, recipe: null },
      recipes: {
        didInvalidate: false,
        isFetching: false,
        results: [],
      },
    });
  });

  it('checks for recipes when there is no dispatch action', () => {
    expect(store.getState().recipes).toEqual(recipePosts(
      { isFetching: false, didInvalidate: false, results: [] },
      {},
    ));
  });
  it('checks for detailedRecipe when there is no dispatch action', () => {
    expect(store.getState().detailedRecipe)
      .toEqual(detailedRecipeReducer({
        isFetching: false,
        recipe: null,
      }, {}));
  });
  it('checks for recipes when there is a dispatch action', () => {
    const data = {
      results: [{ id: 1, title: 'Cabbage Salad with Peanuts' }],
    };
    store.dispatch(requestPosts());
    store.dispatch(receivePosts(data));
    expect(store.getState().recipes).toEqual({
      isFetching: false,
      didInvalidate: false,
      results: [{ id: 1, title: 'Cabbage Salad with Peanuts' }],
    });
  });

  it('checks for detailedRecipe when there is a dispatch action', () => {
    const data = {
      analyzedInstructions: [{ step: 'Heat a medium dry skillet over medium-low heat.' }],
    };
    store.dispatch(requestRecipe());
    store.dispatch(receiveRecipe(data));
    expect(store.getState().detailedRecipe).toEqual({
      isFetching: false,
      recipe:
        [{ step: 'Heat a medium dry skillet over medium-low heat.' }],
    });
  });
});
