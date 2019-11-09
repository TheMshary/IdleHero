import React from "react";
import { observer } from "mobx-react";
import AnimatedNumber from "react-animated-number";

import store from "../Store";

export default observer(() => {
  const toNumber = (number, e) => {
    // the store.notation are for allowing scientific notation in the future.
    return number > 999999 && store.notation
      ? number.toExponential()
      : number.toLocaleString(navigator.language, {
          maximumFractionDigits: 0
        });
  };
  return (
    <div>
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
        formatValue={n => toNumber(n)}
      />
      <p style={{ textAlign: "center" }}>
        You make {store.perSecond} per second.
      </p>
    </div>
  );
});
