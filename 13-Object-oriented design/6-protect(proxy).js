/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и позволяет обращаться только к "публичным" свойствам и методам. При попытке прочитать или перезаписать приватное или несуществующее свойство должно выбрасываться исключение.

import protect from '../protect.js';
 
class Course {
  constructor(name) {
    this._name = name;
  }
 
  getName() {
    return this._name;
  }
}
 
const course = new Course('Object-oriented design');
const protectedCourse = protect(course);
 
course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined
 
protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExists; // Error

В реализации используйте Proxy. */

const validateProperty = (target, name) => {
  if (!(name in target)) {
    throw new Error(`Property "${name}" doesn't exist`);
  }
  if (name.startsWith('_')) {
    throw new Error(`Property "${name}" is protected`);
  }
};

const protect = (obj) => new Proxy(obj, {
  get: (target, name) => {
    validateProperty(target, name);
    const property = target[name];

    return (typeof property === 'function')
      ? property.bind(obj)
      : property;
  },
  set: (target, name, value) => {
    validateProperty(target, name);
    target[name] = value;
    return true;
  },
});

export default protect;
