export const convertNumberToK = (number: number) => {
  if (number < 1000) {
    return String(number);
  }
  const suffixes: string[] = ['', 'K', 'KK', 'KKK', 'KKKK', 'KKKKK', 'KKKKKK', 'KKKKKKK', 'KKKKKKKK', 'KKKKKKKKK'];
  let magnitude: number = 0;
  while (number >= 1000) {
    number = number / 1000;
    magnitude++;
  }
  const formattedNumber: string = number.toFixed(0);
  const suffix: string = suffixes[magnitude];
  return `${formattedNumber}${suffix}`;
}
