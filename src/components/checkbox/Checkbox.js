import React from "react";

const Checkbox = (props) => {
  const {size} = props;
  return (
    <label className={`selection mx-2 my-2 ${size}`} htmlFor="a">
      <input type="checkbox" name="q" id="a" />
      <div className="text">{props.children}</div>
    </label>
  );
};

export default Checkbox;
