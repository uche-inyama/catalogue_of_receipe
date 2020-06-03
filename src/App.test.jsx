import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { filterReducer } from "./reducer";
import { createStore, combineReducers } from "redux";

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
