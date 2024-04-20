/*Реализуйте функцию newYearCongratulation():
newYearCongratulation('John'); // Hi John! Happy New Year!
newYearCongratulation(2023, 'Mila'); // Hi Mila! Happy New Year 2023!*/

function newYearCongratulation(name: string): string;
function newYearCongratulation(year: number, name: string): string;
function newYearCongratulation(data1: string | number, data2?: string): string {
  if (typeof data1 === 'number') {
    return `Hi ${data2}! Happy New Year ${data1}!`;
  }

  return `Hi ${data1}! Happy New Year!`;
}

export default newYearCongratulation;
