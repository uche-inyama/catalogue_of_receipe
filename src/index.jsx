import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import Root from "./root";
import { getRecipeByIngredient } from "./actions";

getRecipeByIngredient();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
