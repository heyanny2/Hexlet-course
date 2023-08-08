/*catchers.js
Реализуйте логику функций, подготовленных в файле. Каждая из них принимает обработчик ошибки и класс ошибки. 
Каждая функция отлавливает особый тип ошибок:

-Функция anyErrorCatcher проверяет, что текущая ошибка наследуется от errorInstance
-Функция appErrorCatcher проверяет, что текущая ошибка наследуется от errorInstance И от одной из ошибок приложения
-Функция customErrorCatcher проверяет, что ошибка содержит свойство isCustomError со значением true и errorInstance при этом отсутствует
Если условие выполнено — ошибка передаётся в errorHandler. Если нет, то выбрасывается в исходном виде.

runCode.js
Реализуйте и экспортируйте по умолчанию функцию, которая имеет следующие параметры:

action - функция, которую нужно выполнить. Обязательный
catcher - обработчик ошибки из catcher.js, в качестве параметра принимает ошибку. Необязательный
Общий принцип работы таков: функция принимает в себя экшен, пытается его выполнить и возвращает либо результат выполнения, 
либо передаёт ошибку в catcher и возвращает его результат (если catcher не задан, выбрасывает ошибку как есть).*/

//catchers.js
import AppError from './errors/AppError.js';

export const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance) {
    return errorHandler(error);
  }
  throw error;
};

export const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance && error instanceof AppError) {
    return errorHandler(error);
  }
  throw error;
};

export const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error.isCustomError && !errorInstance) {
    return errorHandler(error);
  }
  throw error;
};

//runCode.js
const runCode = (action, catcher = null) => {
  try {
    return action();
  } catch (error) {
    if (catcher) {
      return catcher(error);
    }
    throw error;
  }
};

export default runCode;


//////////////////errors catalog

//AppAPINetworkError.js
import AppNetworkError from './AppNetworkError.js';

export default class AppAPINetworkError extends AppNetworkError {}
//AppError.js
export default class AppError extends Error {}
//AppNetworkError.js
import AppError from './AppError.js';

export default class AppNetworkError extends AppError {}
//AppParsingError.js
import AppError from './AppError.js';

export default class AppParsingError extends AppError {}
//CustomError.js
export default (errorMessage) => {
  const error = new Error(errorMessage);
  error.isCustomError = true;
  return error;
};
//NetworkError.js
export default class NetworkError extends Error {}
