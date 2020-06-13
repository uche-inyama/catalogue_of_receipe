import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item';
import style from './itemlist.module.css';

const Itemlist = ({ fetchRecipeLists, recipes }) => {
  useEffect(() => {
    fetchRecipeLists();
  }, []);
  return (
    <div className={style.grid_List}>
      {recipes.map((recipe) => (
        <Item
          id={recipe.id}
          key={recipe.id}
          name={recipe.title}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

Itemlist.propTypes = {
  fetchRecipeLists: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Itemlist;
