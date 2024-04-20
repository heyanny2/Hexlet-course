/*Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:
Текст, который должен быть внутри окна после инициализации
Статус, с которым надо создать объект окна
Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)

const modal = buildModal('hexlet forever', ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened } */

enum ModalStatus {
  Opened,
  Closed,
}

function buildModal(text: string, status: ModalStatus): { text: string; status: ModalStatus } {
  return {
    text,
    status,
  };
}

export { ModalStatus };
export default buildModal;
