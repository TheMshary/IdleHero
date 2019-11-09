import React from "react";
import { Button } from "react-bootstrap";
import store from "../../Store";
import { observer } from "mobx-react";
import Upgrade from "./Upgrade";

export default observer(props => {
  const upgrades = store.perSecondUpgrades.map(upgrade => (
    <Upgrade upgrade={upgrade} />
  ));
  return (
    <div>
      <Button
        onClick={() => {
          store.counter += store.perClick;
        }}
      >
        CLICK
      </Button>
      You make {store.perClick} per click.
      <br />
      {store.perClickPrice}
      <Button onClick={() => store.purchaseCPC()}>CPC</Button>
      +1/click
      {upgrades}
    </div>
  );
});
