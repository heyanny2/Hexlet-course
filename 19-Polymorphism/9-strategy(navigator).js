/*Navigator.js
Реализуйте класс Navigator, который представляет собой упрощенную вариацию навигатора. 
Конструктор класса должен принимать два параметра. 
Первый параметр — это список локаций маршрута, по которому мы передвигаемся. 
Второй параметр указывает на то, как мы передвигаемся: пешком (walking) или на машине (driving). 
По умолчанию предполагается, что мы движаемся пешком (walking). 
В классе должен быть метод goToNextTurn(), который должен переводить на следующую локацию из переданного массива 
в зависимости от выбранного передвижения.

strategies/Walking.js
Реализуйте стратегию, которая переводит на следующую локацию по порядку. Если достигнута последняя локация, то возвращается null

strategies/Driving.js
Реализуйте стратегию, которая так же, как и Walking переводит на следующую локацию, но перепрыгивает через одну.
Изначально мы находимся на первой локации*/

//Navigator.js
class Navigator {
  constructor(streets, type = 'walking') {
    this.streets = streets;
    switch (type) {
      case 'walking':
        this.strategy = new Walking(this.streets);
        break;
      case 'driving':
        this.strategy = new Driving(this.streets);
        break;
    }
    [this.currectStreet] = this.streets;
  }

  goToNextTurn() {
    this.currectStreet = this.strategy.getNextTurn(this.currectStreet);
    return this.currectStreet ?? null;
  }
}

export default Navigator;

//strategies/Walking.js
class Walking {
  step = 1;

  constructor(streets) {
    this.streets = streets;
  }

  getNextTurn(currentStreet) {
    const currentIndex = this.streets.indexOf(currentStreet) + this.step;
    if (currentIndex >= this.streets.length) {
      return null;
    }
    return this.streets[currentIndex];
  }
}

export default Walking;

//strategies/Driving.js
class Driving {
  step = 2;

  constructor(streets) {
    this.streets = streets;
  }

  getNextTurn(currentStreet) {
    const currentIndex = this.streets.indexOf(currentStreet) + this.step;
    if (currentIndex >= this.streets.length) {
      return null;
    }
    return this.streets[currentIndex];
  }
}

export default Driving;
