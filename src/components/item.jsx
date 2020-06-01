import React from "react";

const Item = ({ name, total_recipe }) => (
  <div>
    <div className="image-wrapper">
      <div>image</div>
    </div>
    <div className="receipe-category">{name}</div>
    <div className="number-of-receipes">{total_recipe}</div>
  </div>
);

export default Item;
