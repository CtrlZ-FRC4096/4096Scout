import React from 'react';
import BaseInputProps from './BaseInputProps';

export default function RangeInput(data: BaseInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    data.onChange(e.currentTarget.value);
    e.preventDefault();
  }

  return (
    <input
      className="range range-primary"
      type="range"
      min={data.min}
      max={data.max}
      defaultValue={data.defaultValue}
      id={data.title}
      onChange={handleChange}
    />
  );
}
