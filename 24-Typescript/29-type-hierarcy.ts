/*Реализуйте функцию getUserFriends(), которая принимает JSON с массивом пользователей и с массивом id друзей, и возвращает список друзей пользователя по id. 
Друзья каждого пользователя хранятся в поле friends.

Если пользователь с указанным id не найден, то функция должна вернуть пустой массив. */

type User = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

export type UserResponse = {
  users: User[],
  friends: Friends[]
};

const defaultUser = { id: 0, name: '', age: 0 };

const getUserFriends = (userResponseJSON: string, userId: number): User[] => {
  const userResponse = JSON.parse(userResponseJSON) as UserResponse;

  return userResponse.friends
    .map(([ownerId, friendId]: Friends): User => {
      if (!(userId === ownerId || userId === friendId)) return defaultUser;
      const searchId = (ownerId === userId) ? friendId : ownerId;
      const friend: User | undefined = userResponse.users.find(({ id }) => id === searchId);

      return friend === undefined ? defaultUser : friend;
    })
    .filter((user: User) => user.id > 0);
};

export default getUserFriends;
