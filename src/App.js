import React, { useState } from "react";
import { decorate } from "mobx";
import { Button } from "react-bootstrap";
import AnimatedNumber from "react-animated-number";

// Components
import Upgrades from "./Components/Upgrades";

import store from "./Store";
import { observer } from "mobx-react";

export default observer(() => {
  return (
    <div className="App">
      <AnimatedNumber
        component="p"
        value={store.counter}
        style={{
          transition: "1s ease-out",
          fontSize: 48,
          textAlign: "center"
        }}
        frameStyle={perc => (perc === 100 ? {} : {})}
        duration={300}
        formatValue={n => store.toNumber(n)}
      />
      <p style={{ textAlign: "center" }}>
        You make {store.perSecond} per second.
      </p>
      <Button
        onClick={() => {
          store.counter += store.perClick;
        }}
      >
        CLICK
      </Button>
      You make {store.perClick} per click.
      <Upgrades />
    </div>
  );
});
