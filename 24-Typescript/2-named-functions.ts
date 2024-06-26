/*Реализуйте функцию getHiddenCard().
Она принимает на вход номер кредитки, который состоит из 16 цифр, в виде строки и возвращает его скрытую версию.
Эта версия может использоваться на сайте для отображения. Например, если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: ****5581.

Получается, функция заменяет первые 12 символов на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

getHiddenCard('1234567812345678', 2) // "**5678"
getHiddenCard('1234567812345678', 3) // "***5678"
getHiddenCard('1234567812345678')    // "****5678"
getHiddenCard('2034399002121100', 1) // "*1100" */

function getHiddenCard(cardNumber: string, repeated?: number) {
  const lastNumbers = cardNumber.slice(-4);
  const hidden = '*';
  return `${(repeated ? hidden.repeat(repeated) : hidden.repeat(4)) + lastNumbers}`;
}

export default getHiddenCard;
