import React from "react";

// Components
import Upgrades from "./Components/Upgrades/";
import WipeSave from "./Components/WipeSave";
import Counter from "./Components/Counter";

import store from "./Store";
import { observer } from "mobx-react";

export default observer(
  class App extends React.Component {
    componentDidMount() {
      store.retrieveFromLocalStorage();
    }
    render() {
      return (
        <div className="App">
          <WipeSave />
          <Counter />
          <Upgrades />
        </div>
      );
    }
  }
);
