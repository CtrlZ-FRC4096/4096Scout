import { InputProps } from '../inputs/BaseInputProps';
import ConfigurableInput from '../inputs/ConfigurableInput';
import InputCard from '../inputs/InputCard';
import { useQRScoutState } from '../store/store';

interface SectionProps {
  name: string;
}

export default function Section(props: SectionProps) {
  const formData = useQRScoutState(state => state.formData);
  const inputs = formData.sections.find(s => s.name === props.name)?.fields;
  return (
    <div class="card bg-base-300 pb-4" key={props.name}>
      <figure>
        <h2 class="font-bold text-xl text-center text-secondary-content bg-secondary w-full p-2">
          {props.name.toUpperCase()}
        </h2>
      </figure>
      <div class="card-body items-center p-4">
        <div class="flex flex-col justify-start items-center gap-2 w-full">
        {inputs?.map((e: InputProps) => (
          <InputCard
            title={e.title}
            required={e.required}
            hasValue={
              e.value !== null && e.value !== undefined && e.value !== ''
            }
            key={`${props.name}_${e.title}`}
          >
            <ConfigurableInput section={props.name} code={e.code} />
          </InputCard>
        ))}
        </div>
      </div>
    </div>
  );
}
