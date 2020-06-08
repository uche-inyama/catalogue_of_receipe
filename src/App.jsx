import React from "react";
import Connecteditemslist from "./container/items";
import ConnectedForm from "./container/form";

const App = () => {
  return (
    <div className="App">
      <ConnectedForm />
      <Connecteditemslist />
    </div>
  );
};
export default App;
