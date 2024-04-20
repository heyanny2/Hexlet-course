/*Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова. 
Функция принимает исходное слово и список для проверки — массив. 
А возвращает функция массив всех анаграмм. Если в списке нет анаграммы, то возвращается пустой массив*/

function filterAnagrams(anagram: string, anagrams: string[]): string[] {
  const standard = anagram.split('').sort().join('');
  return anagrams.filter((item) => item.split('').sort().join('') === standard);
}

export default filterAnagrams;
