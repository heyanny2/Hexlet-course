//Реализуйте функцию fail(), которая выбрасывает любое исключение. Пропишете ее возвращаемый тип явно.

function fail(): never {
  throw new Error('wow');
}

export default fail;
