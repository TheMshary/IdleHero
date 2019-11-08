import React, { useState } from "react";

import { Button } from "react-bootstrap";

// Components
import Upgrades from "./Components/Upgrades";

function App() {
  const [counter, setCounter] = useState(0);
  const [perClick, setPerClick] = useState(1);

  const purchaseCPC = () => {
    setPerClick(perClick + 1);
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      {counter}
      <Button onClick={() => setCounter(counter + perClick)}>vs</Button>
      <Upgrades purchaseCPC={purchaseCPC} />
    </div>
  );
}

export default App;
