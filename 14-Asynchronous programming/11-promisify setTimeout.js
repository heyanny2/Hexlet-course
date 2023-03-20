/*Реализуйте таймер в виде промиса. Функция должна принимать на вход количество миллисекунд и возвращать промис.

import wait from './timer.js';
 
wait(100).then(() => console.log('time is over!'));
 */

export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
