/* Реализуйте и экспортируйте функцию getMutualFriends(), которая принимает на вход двух пользователей и возвращает массив состоящий из общих друзей этих пользователей.

Интерфейс абстракции "Пользователь":

user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
user.getFriends() – возвращает список друзей (то есть пользователей). */

export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  const friends2Ids = friends2.map(({ id }) => id);
  return friends1.filter(({ id }) => friends2Ids.includes(id));
};
