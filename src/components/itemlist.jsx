import React from "react";
import Item from "./item";

const Itemlist = (props) => {
  console.log(props.details);
  return (
    <ul>
      {props.details.map((detail) => (
        <li>
          <Item
            key={detail.id}
            name={detail.name}
            total_recipe={detail.recipe.length}
          />
        </li>
      ))}
    </ul>
  );
};

export default Itemlist;
