import { useState } from "react";
import "./App.css";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

function App() {
  // const [count, setCount] = useState(0)
  const [billValue, setBillValue] = useState("");
  const [userASelection, setUserASelection] = useState(0);
  const [userBSelection, setUserBSelection] = useState(0);

  const handleUserAChange = (value) => {
    setUserASelection(value);
  };

  const handleUserBChange = (value) => {
    setUserBSelection(value);
  };

  const handleReset = () => {
    setBillValue("");
    setUserASelection(0);
    setUserBSelection(0);
  };

  return (
    <>
      <BillInput billValue={billValue} setBillValue={setBillValue} />
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
      <Output
        billValue={billValue}
        userASelection={userASelection}
        userBSelection={userBSelection}
      />

      <Reset handleReset={handleReset} />
    </>
  );
}

export default App;
