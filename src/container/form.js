import { connect } from 'react-redux';
import Form from '../components/form/form';
import { getRecipeByIngredient } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (ingredient) => {
    dispatch(getRecipeByIngredient(ingredient));
  },
});

const ConnectedForm = connect(null, mapDispatchToProps)(Form);

export default ConnectedForm;
