import React from "react";
import Connecteditemslist from "./container/items";
import { useParams } from "react-router-dom";

const App = () => {
  let { id } = useParams();
  return (
    <div className="App">
      <Connecteditemslist />
    </div>
  );
};
export default App;
