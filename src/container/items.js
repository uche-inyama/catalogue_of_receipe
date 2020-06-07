import { connect } from "react-redux";
import Itemlist from "../components/itemList/itemlist";

const mapStateToProps = (state) => ({
  details: state.items,
  recipes: state.recipes.results,
  filter: state.filter,
});

const Connecteditemslist = connect(mapStateToProps)(Itemlist);

export default Connecteditemslist;
