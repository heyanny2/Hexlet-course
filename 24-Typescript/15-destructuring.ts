/*Реализуйте функцию lessonsCount(), которая принимает на вход курс и возвращает количество лекций внутри него:

const course = { lessons: ['intro', 'lala'] };
lessonsCount(course); // 2
Используйте внутри деструктуризацию, чтобы извлечь уроки прямо в параметрах функции.*/

function lessonsCount({ lessons }: { lessons: string[] }): number {
  return lessons.length;
}

export default lessonsCount;
