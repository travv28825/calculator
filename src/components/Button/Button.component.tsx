import { Btn } from './Button.style';

interface ButtonProps {
  val: string;
  toDisplay: VoidFunction;
}

function Button({ val, toDisplay }: ButtonProps) {
  return <Btn onClick={toDisplay}>{val}</Btn>;
}

export default Button;
