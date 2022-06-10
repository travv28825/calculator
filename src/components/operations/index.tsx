const operationReg = /[\+\-\*\/]/
const invalidOperationToBegin = /[\+\*\/]/

function isValidDisplay(display: string, toAdd: string): boolean {
  const isValidDots = hasValidDot(display + toAdd)
  const isValidOperation = hasValidOperations(display, toAdd)
  const isInvalidFirst = isValidFirstCharacter(display, toAdd)

  console.log(isValidDots && isValidOperation && isInvalidFirst, '   ', isInvalidFirst)
  return isValidDots && isValidOperation && isInvalidFirst
}

function hasValidDot(str: string): boolean {
  if (str.indexOf('.') === 0) {
    return false
  }

  const hasDot = str.match(/\./g);
  const countDot = hasDot ? hasDot.length : 0;

  return countDot > 1 ? false : true;
}

function hasValidOperations(str: string, toAdd: string): boolean {
  const hasLastOperation = operationReg.test(str[str.length - 1])
  const isOperation = operationReg.test(toAdd)

  return hasLastOperation && isOperation ? false : true
}

function isValidFirstCharacter(str: string, toAdd: string): boolean {
  return str === '' && invalidOperationToBegin.test(toAdd) ? false : true
}

function isValidToShowResult(str: string): boolean {
  return !operationReg.test(str[str.length - 1])
}

function equal(str: string): number {
  const reg = /[*/+-]/;
  if (str.match(reg)) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '+') {
        return parseFloat(temp) + equal(str.substring(i + 1));
      } else if (str[i] === '-' && i !== 0) {
        return parseFloat(temp) - equal(str.substring(i + 1));
      } else if (str[i] === '*') {
        return parseFloat(temp) * equal(str.substring(i + 1));
      } else if (str[i] === '/') {
        return parseFloat(temp) / equal(str.substring(i + 1));
      } else {
        temp += str[i];
      }
    }
  }

  return parseFloat(str);
}

export { equal, isValidDisplay, isValidToShowResult };
