import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["Italy", "India", "United States", "Germany", "Sweden"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        <Message />
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />

        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <span>World</span>
          </Alert>
        )}
        <Button color="success" onClick={() => setAlertVisibility(true)}>
          Button
        </Button>
      </div>
    </>
  );
}

export default App;
