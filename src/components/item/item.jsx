import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './item.module.css';

const Item = ({ name, id }) => {
  const url = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
  const params = `/${id}`;
  return (
    <div>
      <NavLink to={params}>
        <div
          className={style.image}
          style={{
            backgroundImage: `url(${url})`,
          }}
        />
      </NavLink>
      <div className={style.receipe_category}>
        Recipe:
        {name}
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Item;
