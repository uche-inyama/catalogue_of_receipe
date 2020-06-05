import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipeDetails } from "../actions";

const ItemDetail = ({ dispatch, recipe, isFetching }) => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);
  if (isFetching) {
    return <div>load...</div>;
  }
  if (recipe) {
    const { steps } = recipe[0];
    return (
      <>
        <ul>
          {steps.map(({ number, step }) => (
            <li key={number}>{step}</li>
          ))}
        </ul>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const { isFetching, recipe } = state.detailedRecipe;
  return {
    recipe,
    isFetching,
  };
};

export default connect(mapStateToProps)(ItemDetail);
