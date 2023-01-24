/*Класс Time, предназначен для создания объекта-времени. Его конструктор принимает на вход количество часов и минут в виде двух отдельных параметров.

const time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'
Добавьте в класс Time статический метод fromString(), который позволяет создавать объекты Time на основе времени переданного строкой формата часы:минуты.

const time = Time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time}`); // 'The time is 10:23' */

export default class Time {
  static fromString(time) {
    const [hours, minutes] = time.split(':');
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
