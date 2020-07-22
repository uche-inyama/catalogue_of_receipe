import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Item from './item.jsx';

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

it('renders item', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Item
          name="uche"
          id={1}
        />
      </BrowserRouter>, container,
    );
  });
  expect(container).toBeDefined();
});
