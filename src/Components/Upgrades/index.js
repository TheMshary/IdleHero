import React from "react";
import { MDBBtn } from "mdbreact";
import store from "../../Store";
import { observer } from "mobx-react";
import Upgrade from "./Upgrade";

export default observer(props => {
  const upgrades = store.perSecondUpgrades.map(upgrade => (
    <Upgrade upgrade={upgrade} />
  ));
  return (
    <div>
      <MDBBtn
        outline
        color="primary"
        size="lg"
        onClick={() => {
          store.counter += store.perClick;
        }}
      >
        CLICK
      </MDBBtn>
      You make {store.perClick} per click.
      <br />
      {store.perClickPrice}
      <MDBBtn
        outline
        size="sm"
        color="primary"
        onClick={() => store.purchaseCPC()}
      >
        CPC
      </MDBBtn>
      +1/click
      {upgrades}
    </div>
  );
});
