/*Опишите тип состояния DataState и перечисление LoadingStatus, затем реализуйте функцию handleData(),
которая принимает на вход DataState и возвращает строку в зависимости от состояния:
-Строку 'loading...' при LoadingStatus.Loading
-Текст ошибки из error.message при LoadingStatus.Error
-Строку из числового поля data при LoadingStatus.Success
-Если статус не входит в перечисление, функция возвращает строку 'unknown'. */

enum LoadingStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

type DataState =
  | { status: LoadingStatus.Loading }
  | { status: LoadingStatus.Success; data: number }
  | { status: LoadingStatus.Error; error: Error };

const handleData = (dataState: DataState) => {
  switch (dataState.status) {
    case LoadingStatus.Loading:
      return 'loading...';
    case LoadingStatus.Success:
      return String(dataState.data);
    case LoadingStatus.Error:
      return dataState.error.message;
    default:
      return 'unknown';
  }
};

export { DataState, LoadingStatus };
export default handleData;
