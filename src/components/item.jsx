import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ name, timeToPrepare, id }) => {
  const url = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
  const params = `/${id}`;
  return (
    <div>
      <NavLink to={params}>
        <img src={url} alt={name} />
      </NavLink>
      <div className="receipe-category">{name}</div>
      <div className="number-of-receipes">{timeToPrepare} minutes</div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  timeToPrepare: PropTypes.number,
  id: PropTypes.number,
};
export default Item;
