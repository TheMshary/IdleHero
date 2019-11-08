import React from "react";
import { observer } from "mobx-react";

import { Button } from "react-bootstrap";
import store from "../../Store";

export default observer(props => {
  const upgrade = props.upgrade;
  return (
    <div>
      {upgrade.price}
      <Button onClick={() => store.purchaseUpgrade(upgrade)}>
        {upgrade.label}
      </Button>
      +{upgrade.value}/s
    </div>
  );
});
