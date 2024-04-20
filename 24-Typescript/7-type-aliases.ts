/*Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше. 
Если пользователи являются ровесниками, то возвращается null*/

type User = {
  name: string;
  age: number;
};

function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age > user2.age) {
    return user1;
  }
  if (user2.age > user1.age) {
    return user2;
  }

  return null;
}

export type { User };
export default getOlderUser;
