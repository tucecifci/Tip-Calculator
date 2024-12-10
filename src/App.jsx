import { useState } from "react";
import "./App.css";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";

function App() {
  // const [count, setCount] = useState(0)
  const [userASelection, setUserASelection] = useState(1);
  const [userBSelection, setUserBSelection] = useState(1);

  const handleUserAChange = (value) => {
    setUserASelection(value);
  };

  const handleUserBChange = (value) => {
    setUserBSelection(value);
  };

  return (
    <>
      <BillInput />
      <SelectPercentage
        title="How did you like the service?"
        selectedValue={userASelection}
        onSelectionChange={handleUserAChange}
      />
      <SelectPercentage
        title="How did your friend like the service?"
        selectedValue={userBSelection}
        onSelectionChange={handleUserBChange}
      />
    </>
  );
}

export default App;
