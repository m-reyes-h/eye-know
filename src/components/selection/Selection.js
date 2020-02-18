import React from "react";

const Selection = ({ size, children, isSelected, value, onChange, disabled }) => {
  return (
    <label
      className={`selection mx-2 my-2 ${size} ${disabled ? 'disabled' : ''} ${isSelected ? "active" : ""}`}
      htmlFor={value}
    >
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        checked={isSelected}
        type="radio"
        id={value}
        name="q"
      />
      <div className="text">{children}</div>
    </label>
  );
};

export default Selection;
