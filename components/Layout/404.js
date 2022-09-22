import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

function NotFound() {
  return (
    <Card>
      <h1>Página no encontrada</h1>
      <Button href="/">Volver a la página principal</Button>
    </Card>
  );
}

export default NotFound;
