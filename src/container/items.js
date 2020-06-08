import { connect } from 'react-redux';
import Itemlist from '../components/itemList/itemlist';

const mapStateToProps = (state) => ({
  recipes: state.recipes.results,
});

const Connecteditemslist = connect(mapStateToProps)(Itemlist);

export default Connecteditemslist;
