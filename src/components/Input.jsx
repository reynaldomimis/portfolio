import React from "react";

const Input = ({ onChange, fieldStyle, hint, name, value }) => {
  return (
    <>
      <div className={fieldStyle} data-aos="fade-down-right">
        <input
          type="text"
          name={name}
          value={value}
          placeholder={hint}
          className="input"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
