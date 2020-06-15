import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './itemDetail.module.css';

const ItemDetail = ({ fetchRecipeDetail, recipe, isFetching }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchRecipeDetail(id);
  }, []);
  if (isFetching) {
    return <div className={style.status}>loading...</div>;
  }
  if (recipe) {
    if (recipe.length === 0) {
      return (
        <div className={style.status}>
          There are no instructions found for this recipe.
        </div>
      );
    }
    const { steps } = recipe[0];
    return (
      <>
        <h3>Recipe Instructions: </h3>
        <ul className={style.item_detail}>
          {steps.map(({ number, step }) => (
            <li key={number}>{step}</li>
          ))}
        </ul>
      </>
    );
  }
  return <h2>Recipe Detail not found</h2>;
};

ItemDetail.defaultProps = {
  recipe: null,
  steps: [],
};

ItemDetail.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchRecipeDetail: PropTypes.func.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.any),
  steps: PropTypes.arrayOf(PropTypes.any),
};

export default ItemDetail;
