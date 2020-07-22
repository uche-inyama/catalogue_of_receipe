import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item.jsx';
import { ItemListWrap } from './itemListStyle';

const Itemlist = ({ fetchRecipeLists, recipes }) => {
  useEffect(() => {
    fetchRecipeLists();
  }, []);
  return (
    <ItemListWrap >
      {recipes.map((recipe) => (
        <Item
          id={recipe.id}
          key={recipe.id}
          name={recipe.title}
          image={recipe.image}
        />
      ))}
    </ItemListWrap>
  );
};

Itemlist.propTypes = {
  fetchRecipeLists: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Itemlist;
