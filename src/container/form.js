import { connect } from 'react-redux';
import Form from '../components/form/form';
import { filterItem } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (searchText) => {
    dispatch(filterItem(searchText));
  },
});

const ConnectedForm = connect(null, mapDispatchToProps)(Form);

export default ConnectedForm;
