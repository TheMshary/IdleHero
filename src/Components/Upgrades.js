import React from "react";
import { Button } from "react-bootstrap";
import store from "../Store";
import { observer } from "mobx-react";

export default observer(props => {
  return (
    <div>
      {store.perClickPrice}
      <Button onClick={() => store.purchaseCPC()}>CPC</Button>
    </div>
  );
});
