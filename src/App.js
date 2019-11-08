import React, { useState } from "react";
import { decorate } from "mobx";
import { Button } from "react-bootstrap";

// Components
import Upgrades from "./Components/Upgrades";

import store from "./Store";
import { observer } from "mobx-react";

export default observer(() => {
  return (
    <div className="App">
      {store.counter}
      <Button
        onClick={() => {
          store.counter += store.perClick;
        }}
      >
        vs
      </Button>
      <Upgrades />
    </div>
  );
});
