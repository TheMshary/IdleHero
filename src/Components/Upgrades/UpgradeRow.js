import React from "react";
import { observer } from "mobx-react";

import store from "../../Store";

export default observer(props => {
  const upgrades = props.upgrades.map(upgrade => {
    return <div>10 30 am</div>;
  });
  return upgrades;
});
