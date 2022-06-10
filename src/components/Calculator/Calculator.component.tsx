import { useState } from 'react';

import Button from '../Button';
import {
  Container,
  CalculatorContainer,
  ButtonsGroup,
  NumbersWrapper,
} from './Calculator.style';

import { equal } from '../operations';
import Display from '../Display';

function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  function handleButtonClick(btnValue: string) {
    const actualDisplay = displayValue + btnValue;
    if (isValidDisplay(actualDisplay)) {
      setDisplayValue((prev) => (prev += btnValue));
      // calculateFuture(actualDisplay);
    }
  }

  function getEqual(): void {
    const result = equal(displayValue).toString();
    setResult(result);
  }

  function calculateFuture(calculate: string): void {
    const calc = equal(calculate);
    if (!isNaN(calc)) {
      const newFuture = `=${calc.toString()}`;
      setResult(newFuture);
    }
  }

  function isValidDisplay(display: string): boolean {
    const dotStart = display.indexOf('.') === 0 ? true : false;

    const hasDot = display.match(/\./g);
    const countDot = hasDot ? hasDot.length : 0;

    return countDot > 1 || dotStart ? false : true;
  }

  function onClear(): void {
    setDisplayValue('');
    setResult('');
  }

  return (
    <Container>
      <CalculatorContainer>
        <Display data={displayValue} result={result} />
        <NumbersWrapper>
          <ButtonsGroup>
            <Button align={2} bg="dark" toDisplay={onClear} val="Clear" />
            <Button align={1} bg="dark" toDisplay={onClear} val="?" />
            <Button align={1} bg="dark" toDisplay={onClear} val="?" />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('/')}
              val="+-"
            />
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('/')}
              val="raiz"
            />
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('/')}
              val="%"
            />
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('/')}
              val="/"
            />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('7')}
              val="7"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('8')}
              val="8"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('9')}
              val="9"
            />
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('*')}
              val="*"
            />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('4')}
              val="4"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('5')}
              val="5"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('6')}
              val="6"
            />
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('-')}
              val="-"
            />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('1')}
              val="1"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('2')}
              val="2"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('3')}
              val="3"
            />
            <Button
              align={1}
              bg="dark"
              toDisplay={() => handleButtonClick('+')}
              val="+"
            />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button
              align={2}
              bg="default"
              toDisplay={() => handleButtonClick('0')}
              val="0"
            />
            <Button
              align={1}
              bg="default"
              toDisplay={() => handleButtonClick('.')}
              val="."
            />
            <Button align={1} toDisplay={getEqual} bg="primary" val="=" />
          </ButtonsGroup>
        </NumbersWrapper>
      </CalculatorContainer>
    </Container>
  );
}

export default Calculator;
