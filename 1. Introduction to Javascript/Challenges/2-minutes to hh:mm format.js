/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм. 
Если количество минут содержит больше 24 часов (1 суток), то функция возвращает время, прошедшее с полуночи последних суток.*/

const formattedTime = (mins) => {
  const hours = Math.floor((mins / 60) % 24);
  const formattedHours = hours >= 10 ? hours : (`0${hours}`);
  const minutes = (mins % 60);
  const formattedMinutes = minutes >= 10 ? minutes : (`0${minutes}`);
  return `${formattedHours}:${formattedMinutes}`;
};

export default formattedTime;

console.log(formattedTime(5));//'00:05'
console.log(formattedTime(15));//'00:15'
console.log(formattedTime(60));//'01:00'
console.log(formattedTime(67));//'01:07'
console.log(formattedTime(130));//'02:10'
console.log(formattedTime(175));//'02:55'
console.log(formattedTime(549));//'09:09'
console.log(formattedTime(600));//'10:00'
console.log(formattedTime(754));//'12:34'
console.log(formattedTime(1293));//'21:33'
console.log(formattedTime(1504));//'01:04'
