import React from "react";

function Input({ title, children, classForInput, ...props }) {
  return (
    <div className="input_element">
      <label htmlFor={title}>{title}</label>
      <input className={classForInput} {...props} />
      {children}
    </div>
  );
}

export default Input;
