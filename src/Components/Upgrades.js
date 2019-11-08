import React from "react";
import { Button } from "react-bootstrap";
import store from "../Store";
import { observer } from "mobx-react";

export default observer(props => {
  const upgrades = store.perSecondUpgrades.map(upgrade => (
    <div>
      {upgrade.price}
      <Button onClick={() => store.purchaseUpgrade(upgrade)}>
        {upgrade.label}
      </Button>
      +{upgrade.value}/s
    </div>
  ));
  return (
    <div>
      {store.perClickPrice}
      <Button onClick={() => store.purchaseCPC()}>CPC</Button>
      +1/click
      {upgrades}
    </div>
  );
});
