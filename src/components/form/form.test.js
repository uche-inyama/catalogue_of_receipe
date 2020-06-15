import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Form from './form';


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

it('renders form', () => {
  const onFilterClick = jest.fn();
  act(() => {
    render(<Form onFilterClick={onFilterClick} />, container);
  });
  expect(container).toBeDefined();
});
