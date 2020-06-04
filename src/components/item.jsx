import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ name, timeToPrepare, id }) => {
  const url = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
  return (
    <div>
      <NavLink to="/detail">
        <img src={url} alt={name} />
      </NavLink>
      {/* <div className="image-wrapper">
        <img src={url} alt={name} />
      </div> */}
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
