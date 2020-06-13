import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import ItemList from './itemlist';
import Item from '../item/item';

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

describe('recipelists', () => {
    it('renders item', () => {
        const recipes = [];
        const fetchRecipeLists = jest.fn();
        const renderer = create(
            <BrowserRouter>
                <ItemList
                    recipes={recipes}
                    fetchRecipeLists={fetchRecipeLists}
                />
            </BrowserRouter>
        );
        const root = renderer.root;
        expect(root).toBeDefined();
        expect(root.findAllByType(Item).length).toEqual(0);
    });

    it.only('renders list of Recipes when recipes array is not null', () => {
        const recipes = [
            {
                id: 1,
                title: "Henry",
                image: "Eddy.png"
            }];
        const fetchRecipeLists = jest.fn();
        const renderer = create(
            <BrowserRouter>
                <ItemList
                    recipes={recipes}
                    fetchRecipeLists={fetchRecipeLists}
                />
            </BrowserRouter>
        );
        const root = renderer.root;
        expect(root).toBeDefined();
        expect(root.findAllByType(Item).length).toEqual(1);
    });
});
