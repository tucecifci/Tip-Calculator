import React from "react";

function SelectPercentage({ title, selectedValue, onSelectionChange }) {
  const handleChange = (event) => {
    onSelectionChange(event.target.value);
  };

  return (
    <div>
      <h3>{title} </h3>
      <select
        name="percentage"
        id="percentage"
        defaultValue={0}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage;

//
