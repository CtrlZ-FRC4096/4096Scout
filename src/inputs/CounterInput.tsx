import BaseInputProps from './BaseInputProps';

export interface CounterInputProps extends BaseInputProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

export default function CounterInput(data: CounterInputProps) {
  function handleChange(increment: number) {
    const newVal = data.value + increment;
    if (data.max !== undefined && newVal > data.max) {
      // Don't fire the event if the new value would be greater than the max
      return;
    }
    if (data.min !== undefined && newVal < data.min) {
      // Don't fire the event if the new value would be less than the min
      return;
    }

    data.onChange(newVal);
  }

  return (
    <>
    <span className={"join self-center"}>
      <button className="btn join-item btn-primary" 
        title="down"
        type="button"
        onClick={() => handleChange(-(data.step || 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
      </button>
      <span className="join-item px-8 bg-base-100 flex items-center">
      <h2 className="text-2xl text-primary">{data.value}</h2>
      </span>
      <button className="btn join-item btn-primary"
        title="up"
        type="button"
        onClick={() => handleChange(data.step || 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
      </button>
    </span>
    </>
    
  );
}
