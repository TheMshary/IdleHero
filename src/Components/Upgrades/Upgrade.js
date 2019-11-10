import React from "react";
import { observer } from "mobx-react";

import { MDBBtn } from "mdbreact";
import store from "../../Store";

export default observer(props => {
  const upgrade = props.upgrade;
  return (
    <div>
      {upgrade.price}
      <MDBBtn
        outline
        color="primary"
        size="sm"
        onClick={() => store.purchaseUpgrade(upgrade)}
      >
        {upgrade.label}
      </MDBBtn>
      +{upgrade.value}/s
    </div>
  );
});
