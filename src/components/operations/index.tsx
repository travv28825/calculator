const equal = (display: string): number => {
  // if(typeof display[display.length-1] === 'number'){
  const response = calculateString(display);

  return response;
  // }
};

function calculateString(str: string): number {
  const reg = /[*/+-]/;
  if (str.match(reg)) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '+') {
        return parseFloat(temp) + calculateString(str.substring(i + 1));
      } else if (str[i] === '-' && i !== 0) {
        return parseFloat(temp) - calculateString(str.substring(i + 1));
      } else if (str[i] === '*') {
        return parseFloat(temp) * calculateString(str.substring(i + 1));
      } else if (str[i] === '/') {
        return parseFloat(temp) / calculateString(str.substring(i + 1));
      } else {
        temp += str[i];
      }
    }
  }

  return parseFloat(str);
}

export { equal };
