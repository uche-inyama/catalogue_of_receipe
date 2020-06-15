import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    RECEIVE_RECIPE,
    REQUEST_RECIPE,
    requestPosts,
    receivePosts,
    receiveRecipe,
    requestRecipe
} from './actions';

describe('actions', () => {
    it('should create an action to add a requestPosts', () => {
        const expectedAction = {
            type: REQUEST_POSTS,
        }
        expect(requestPosts()).toEqual(expectedAction);
    });
    it('should create an action to add a receivePosts', () => {
        const data = {
            results: [{ id: 1, title: 'Cabbage Salad with Peanuts' }]
        }
        const expectedAction = {
            type: RECEIVE_POSTS,
            posts: data.results
        }
        expect(receivePosts(data)).toEqual(expectedAction)
    })
    it('should create an action to add a requestRecipe', () => {
        const expectedAction = {
            type: REQUEST_RECIPE,
        }
        expect(requestRecipe()).toEqual(expectedAction);
    });
    it('should create an action to add a recieveRecipe', () => {
        const data = {
            analyzedInstructions: [{ step: 'Heat a medium dry skillet over medium-low heat.' }]
        }
        const expectedAction = {
            type: RECEIVE_RECIPE,
            recipe: data.analyzedInstructions,
        }
        expect(receiveRecipe(data)).toEqual(expectedAction)
    })
});
