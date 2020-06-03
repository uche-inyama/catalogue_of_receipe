import React from "react";
import PropTypes from "prop-types";

const Item = ({ name, timeToPrepare, id }) => {
  const url = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
  return (
    <div>
      <div className="image-wrapper">
        <img src={url} alt={name} />
      </div>
      <div className="receipe-category">{name}</div>
      <div className="number-of-receipes">{timeToPrepare}</div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  timeToPrepare: PropTypes.number,
  id: PropTypes.number,
};
export default Item;
