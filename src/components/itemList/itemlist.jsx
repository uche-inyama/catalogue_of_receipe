import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item';
import { fetchPosts } from '../../actions';
import style from './itemlist.module.css';

const Itemlist = ({ dispatch, recipes }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className={style.grid_List}>
      {recipes.map((recipe) => (
        <Item
          id={recipe.id}
          key={recipe.id}
          name={recipe.title}
          timeToPrepare={recipe.readyInMinutes}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

Itemlist.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf.isRequired,
};

export default Itemlist;
