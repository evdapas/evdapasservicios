import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

function NotFound() {
  return (
    <Card>
      <h1>Az oldal nem található</h1>
      <Button href="/">Vissza a főoldalra</Button>
    </Card>
  );
}

export default NotFound;
