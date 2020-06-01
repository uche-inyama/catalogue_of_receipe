import React from "react";
import { connect } from "react-redux";
import Itemlist from "../components/itemlist";

const mapStateToProps = (state) => {
  return {
    details: state.items,
  };
};

const Connecteditemslist = connect(mapStateToProps)(Itemlist);

export default Connecteditemslist;
