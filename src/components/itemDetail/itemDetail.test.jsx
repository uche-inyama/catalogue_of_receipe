import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ItemDetail from './itemDetail.jsx';

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

describe('ItemDetail', () => {
  it('renders itemDetail, with no instructions', () => {
    const fetchRecipeDetail = jest.fn();
    const isFetching = false;
    const recipe = [
      {
        steps: [],
      },
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
        </BrowserRouter>,
        container,
      );
    });
  });

  it.only('renders itemDetail, with instructions', () => {
    const fetchRecipeDetail = jest.fn();
    const isFetching = false;
    const recipe = [
      {
        steps: [
          { number: 1, step: 'Place the shredded cabbage and scallions in a large bowl' },
        ],
      },
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
        </BrowserRouter>,
        container,
      );
    });
  });
});
