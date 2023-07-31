/*helpers.js
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает приветствие для пользователя. 
Это приветствие показывается пользователю на сайте. 
Если пользователь гость, то выводится "Nice to meet you Guest!", если не гость, то "Hello <Имя>!", где "<Имя>" это имя реального пользователя.*/

//User.js
class User {
  constructor(name) {
    this.type = 'user';
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.type;
  }
}

export default User;

//Guest.js
class Guest {
  constructor() {
    this.type = 'guest';
    this.name = 'Guest';
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.type;
  }
}

export default Guest;

//helpers.js
const mapping = {
  user: (user) => `Hello ${user.getName()}!`,
  guest: (guest) => `Nice to meet you ${guest.getName()}!`,
};

export default (someUser) => (
  mapping[someUser.getTypeName()](someUser)
);
