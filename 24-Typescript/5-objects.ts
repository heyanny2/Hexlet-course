/*Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:

const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};
isComplete(course); // false */

function isComplete(course: { name: string, lessons: string[] }) {
  return course.lessons.length >= 4;
}

export default isComplete;
