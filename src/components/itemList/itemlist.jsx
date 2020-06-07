import React, { useEffect } from "react";
import Item from "../item/item.jsx";
import { fetchPosts } from "../../actions";
import PropTypes from "prop-types";
import style from "./itemlist.module.css";

const Itemlist = ({ dispatch, recipes }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <ul className={style.grid_List}>
      {recipes.map((recipe) => (
        <li>
          <Item
            id={recipe.id}
            key={recipe.id}
            name={recipe.title}
            timeToPrepare={recipe.readyInMinutes}
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
