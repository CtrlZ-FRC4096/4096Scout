import React from 'react'
import BaseInputProps from './BaseInputProps'

export interface BoolInputProps extends BaseInputProps {
  defaultValue?: boolean
}

export default function Checkbox(data: BoolInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    data.onChange(e.currentTarget.checked)
  }

  return (
    <div className="">
      <input
        className="checkbox checkbox-primary"
        type="checkbox"
        role="switch"
        id={data.title}
        onInput={handleChange}
        checked={data.value}
      />
    </div>
  )
}
