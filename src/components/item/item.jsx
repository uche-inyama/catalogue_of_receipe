import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemWrap } from './itemStyle'

const Item = ({ name, id }) => {
  const url = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
  const params = `/${id}`;
  return (
    <ItemWrap>
      <div>
        <Link to={params}>
          <div
            className='image'
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        </Link>
        <div className='receipe_category'>
          Recipe:
          {name}
        </div>
      </div>
    </ItemWrap>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Item;
