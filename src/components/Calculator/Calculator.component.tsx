import { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import { DisplayContainer, FutureEqual } from '../Input/Input.style';
import {
  Container,
  CalculatorContainer,
  ButtonsGroup,
  NumbersWrapper,
  OperationsWrapper,
} from './Calculator.style';

import { equal } from '../operations';

function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [future, setFuture] = useState<string>('');

  function handleButtonClick(btnValue: string) {
    const actualDisplay = displayValue + btnValue;
    if (isValidDisplay(actualDisplay)) {
      setDisplayValue((prev) => (prev += btnValue));
      calculateFuture(actualDisplay);
    }
  }

  function getEqual(): void {
    const result = equal(displayValue).toString();
    setDisplayValue(result);
  }

  function calculateFuture(calculate: string): void {
    const calc = equal(calculate);
    if (!isNaN(calc)) {
      const newFuture = `=${calc.toString()}`;
      setFuture(newFuture);
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
    setFuture('');
  }

  return (
    <Container>
      <CalculatorContainer>
        <DisplayContainer>
          <Input data={displayValue} />
          <FutureEqual>{future}</FutureEqual>
        </DisplayContainer>
        <NumbersWrapper>
          <ButtonsGroup>
            <Button toDisplay={() => handleButtonClick('1')} val="1" />
            <Button toDisplay={() => handleButtonClick('2')} val="2" />
            <Button toDisplay={() => handleButtonClick('3')} val="3" />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button toDisplay={() => handleButtonClick('4')} val="4" />
            <Button toDisplay={() => handleButtonClick('5')} val="5" />
            <Button toDisplay={() => handleButtonClick('6')} val="6" />
          </ButtonsGroup>
          <ButtonsGroup>
            <Button toDisplay={() => handleButtonClick('7')} val="7" />
            <Button toDisplay={() => handleButtonClick('8')} val="8" />
            <Button toDisplay={() => handleButtonClick('9')} val="9" />
          </ButtonsGroup>
        </NumbersWrapper>
        <OperationsWrapper>
          <Button toDisplay={() => handleButtonClick('0')} val="0" />
          <Button toDisplay={() => handleButtonClick('.')} val="." />
          <Button toDisplay={getEqual} val="=" />
          <Button toDisplay={onClear} val="Clear" />
        </OperationsWrapper>
        <OperationsWrapper>
          <Button toDisplay={() => handleButtonClick('+')} val="+" />
          <Button toDisplay={() => handleButtonClick('-')} val="-" />
          <Button toDisplay={() => handleButtonClick('*')} val="*" />
          <Button toDisplay={() => handleButtonClick('/')} val="/" />
        </OperationsWrapper>
      </CalculatorContainer>
    </Container>
  );
}

export default Calculator;
