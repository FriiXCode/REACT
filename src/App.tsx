import React from "react";
import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";
import Listgroup from "./Listgroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Press me!
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Person preference kinda but yeaaah!
        </Alert>
      )}
      <Listgroup>CITY-NAME</Listgroup>
    </div>
  );
}

export default App;
