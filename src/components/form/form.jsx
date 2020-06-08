import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import style from "./form.module.css";

const Form = ({ onFilterClick }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterClick(value);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="search">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="search any keyword"
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

Form.propTypes = {
  onFilterClick: PropTypes.func,
};

export default Form;
