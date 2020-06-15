import reducer from './reducer';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    RECEIVE_RECIPE,
    REQUEST_RECIPE
} from './actions';

describe('recipe reducer', () => {
    it('should return the initail state', () => {
        expect(reducer(undefined, {})).toEqual({

            detailedRecipe: { "isFetching": false, "recipe": null },
            recipes: {
                didInvalidate: false,
                isFetching: false,
                didInvalidate: false,
                results: [],
            }
        });
    });
});