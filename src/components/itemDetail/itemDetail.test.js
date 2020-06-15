import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ItemDetail from './itemDetail';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('', () => {
    it.only('renders itemDetail, with no instructions', () => {
        const fetchRecipeDetail = jest.fn();
        const isFetching = false;
        const recipe = [
            {
                steps: [
                    {}
                ]
            }
        ]

        const { steps } = recipe[0];
        act(() => {
            render(
                <BrowserRouter>
                    <ItemDetail
                        fetchRecipeDetail={fetchRecipeDetail}
                        steps={steps}
                        recipe={recipe}
                        isFetching={isFetching}
                    />
                </BrowserRouter>
                , container);
        });
    });


    it.only('renders itemDetail, with no instructions', () => {
        const fetchRecipeDetail = jest.fn();
        const isFetching = false;
        const recipe = [
            {
                steps: [
                    { step: 'Place the shredded cabbage and scallions in a large bowl' }
                ]
            }
        ];
        const { steps } = recipe[0];
        act(() => {
            render(
                <BrowserRouter>
                    <ItemDetail
                        fetchRecipeDetail={fetchRecipeDetail}
                        steps={steps}
                        recipe={recipe}
                        isFetching={isFetching}
                    />
                </BrowserRouter>
                , container);
        });
    });
});