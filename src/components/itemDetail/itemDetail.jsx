import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipeDetails } from "../../actions";
import style from "./itemDetail.module.css";

const ItemDetail = ({ dispatch, recipe, isFetching }) => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);
  if (isFetching) {
    return <div>loading...</div>;
  }
  if (recipe) {
    if (recipe.length === 0) {
      return <div>{"There are no instructions found for this recipe"}</div>;
    }
    const { steps } = recipe[0];
    return (
      <>
        <ul className={style.item_detail}>
          {steps.map(({ number, step }) => (
            <li key={number}>{step}</li>
          ))}
        </ul>
      </>
    );
  }
  return <h2>Recipe's Detail not found</h2>;
};

const mapStateToProps = (state) => {
  const { isFetching, recipe } = state.detailedRecipe;
  return {
    recipe,
    isFetching,
  };
};

export default connect(mapStateToProps)(ItemDetail);

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { getRecipeDetails } from "../actions";

// const ItemDetail = ({ dispatch, recipe, isFetching }) => {
//   const { id } = useParams();
//   useEffect(() => {
//     dispatch(getRecipeDetails(id));
//   }, []);
//   if (isFetching) {
//     return <div>loading...</div>;
//   }
//   if (recipe) {
//     if (recipe.length === 0) {
//       return <div>{"There are no instructions found for this recipe"}</div>;
//     }
//     const { steps } = recipe[0];
//     return (
//       <>
//         <ul className="list_detail">
//           {steps.map(({ number, step }) => (
//             <li key={number}>{step}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
//   return <h2>Recipe's Detail not found</h2>;
// };

// const mapStateToProps = (state) => {
//   const { isFetching, recipe } = state.detailedRecipe;
//   return {
//     recipe,
//     isFetching,
//   };
// };

// export default connect(mapStateToProps)(ItemDetail);
