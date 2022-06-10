import { Btn } from './Button.style';

interface ButtonProps {
  val: string;
  toDisplay: VoidFunction;
  bg: string;
  align: number;
}

function Button({ align, val, bg, toDisplay }: ButtonProps) {
  return (
    <Btn
      align={align}
      primary={bg === 'primary' ? true : false}
      dark={bg === 'dark' ? true : false}
      onClick={toDisplay}
    >
      {val}
    </Btn>
  );
}

export default Button;
