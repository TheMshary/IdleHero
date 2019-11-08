import React from "react";
import { observer } from "mobx-react";

import { Button } from "react-bootstrap";
import store from "../Store";

export default observer(props => {
  const confirmMessage = "clear save";
  const promptMessage = `Are you sure you would like to COMPLETELY WIPE YOUR SAVE permanently? (Type "${confirmMessage}" to confirm.)`;
  return (
    <Button
      onClick={() => {
        if (prompt(promptMessage) === confirmMessage) store.wipeSave();
      }}
    >
      Wipe Save
    </Button>
  );
});
