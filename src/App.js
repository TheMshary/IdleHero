import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { observer } from "mobx-react";
import store from "./Store";

// Components
import Upgrades from "./Components/Upgrades/";
import WipeSave from "./Components/WipeSave";
import Counter from "./Components/Counter";

/*
TODO:
Using Material Design Bootstrap React,
1. Layout the site
2. Upgrade Row using MD Buttons
3. Disabled buttons for not-yet-unlocked upgrades (unlocked after buying a certain number of the Per Second X)
*/

export default observer(
  class App extends React.Component {
    componentDidMount() {
      store.retrieveFromLocalStorage();
    }
    render() {
      return (
        <MDBContainer fluid className="App">
          <MDBRow>
            <WipeSave />
          </MDBRow>
          <MDBRow>
            <Counter />
          </MDBRow>
          <MDBRow>
            <Upgrades />
          </MDBRow>
        </MDBContainer>
      );
    }
  }
);
