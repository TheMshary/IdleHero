import React from "react";
import { Button } from "react-bootstrap";
export default function Upgrades(props) {
  return (
    <div>
      <Button onClick={() => props.purchaseCPC()}>CPC</Button>
    </div>
  );
}
