import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { itemsReducer, filterReducer } from "./reducer";
import { createStore, combineReducers } from "redux";
import { initializeItems, filterItem } from "./actions";

describe("itemReducer", () => {
  let store;
  beforeEach(() => {
    const reducer = combineReducers({
      items: itemsReducer,
    });
    store = createStore(reducer);
  });
  test("should be initially empty", () => {
    const state = store.getState();
    const { items } = state;
    expect(items.length).toEqual(0);
  });

  test("should initialize items array", () => {
    const items_array = [
      {
        id: 1,
        name: "uche",
      },
      {
        id: 2,
        name: "Eddy",
      },
    ];
    store.dispatch(initializeItems(items_array));
    const { items } = store.getState();
    expect(items.length).toEqual(2);
  });
});

describe("filterReducer", () => {
  let store;
  beforeEach(() => {
    const reducer = combineReducers({
      filter: filterReducer,
    });
    store = createStore(reducer);
  });
  test("should assign a searchText to filter", () => {
    const obj = {
      searchText: "",
      item_array: [
        {
          id: 1,
          name: "uche",
          ingredients: ["chili", "curry"],
        },
      ],
    };
    store.dispatch(filterItem("chili"));
    const { filter } = store.getState();
    expect(filter.searchText).toEqual("chili");
  });
});
