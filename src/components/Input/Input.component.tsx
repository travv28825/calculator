import { Display } from './Input.style';

type DisplayArgs = {
  data: string;
};

function Input({ data }: DisplayArgs) {
  return (
    <Display>
      <input value={data} id="display" type="text" readOnly={true} />
    </Display>
  );
}

export default Input;
