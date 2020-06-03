import React, { useEffect } from "react";
import Item from "./item";
import { fetchPosts } from "../actions";
import PropTypes from "prop-types";

const Itemlist = ({ dispatch, recipes }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <ul>
      {recipes.map((recipe) => (
        <li>
          <Item
            id={recipe.id}
            key={recipe.id}
            name={recipe.title}
            time_to_prepare={recipe.readyInMinutes}
            image={recipe.image}
          />
        </li>
      ))}
    </ul>
  );
};

Itemlist.propTypes = {
  dispatch: PropTypes.func,
  recipes: PropTypes.array,
};
export default Itemlist;
