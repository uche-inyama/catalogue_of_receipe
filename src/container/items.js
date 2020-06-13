import { connect } from 'react-redux';
import Itemlist from '../components/itemList/itemlist';
import { fetchPosts } from '../actions';

const mapStateToProps = (state) => ({
  recipes: state.recipes.results,
});

const mapDispatchToProps = (dispatch) => {
  function fetchRecipeLists() {
    return dispatch(fetchPosts());
  }
  return {
    fetchRecipeLists,
  };
};

const Connecteditemslist = connect(mapStateToProps, mapDispatchToProps)(Itemlist);

export default Connecteditemslist;
