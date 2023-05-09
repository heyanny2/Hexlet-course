/*Протестируйте функцию sort(), которая сортирует массив целых чисел по возрастанию. 
Функция возвращает новый отсортированный массив. 
При тестировании используйте комбинированный подход.*/

test('should return new ordered array', () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (data) => {
      const sorted = sort(data);
      expect(sorted).toBeSorted();
    }),
  );
});
