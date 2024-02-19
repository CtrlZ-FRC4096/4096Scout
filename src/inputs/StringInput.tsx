import React from 'react';
import { inputSelector, useQRScoutState } from '../store/store';
import BaseInputProps from './BaseInputProps';

export interface StringInputProps extends BaseInputProps {
  maxSize?: number;
}

export default function StringInput(props: StringInputProps) {
  const data = useQRScoutState(inputSelector(props.section, props.code));

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.onChange(e.currentTarget.value);
    e.preventDefault();
  }

  return (
    <textarea
      className="textarea break-words break-all leading-tight"
      disabled={data?.disabled}
      name={`${data?.title}_input`}
      id={`${data?.title}_input`}
      onChange={handleChange}
      defaultValue={data?.defaultValue || ''}
      value={data?.value || ''}
    ></textarea>
  );
}
