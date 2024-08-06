'use client'
import React from 'react';

function Input({ handleChange, value, title, name, checked }) {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        checked={checked}
      />
      <span className="checkmark"></span>{title}
    </label>
  );
}

export default Input;
