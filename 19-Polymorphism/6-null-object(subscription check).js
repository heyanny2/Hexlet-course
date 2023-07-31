/* FakeSubscription.js
Реализуйте и экспортируйте по умолчанию класс FakeSubscription. 
В конструктор FakeSubscription принимает пользователя. Если пользователь — администратор user.isAdmin(), то все доступы разрешены, 
если нет — запрещены. Класс должен повторять интерфейс класса Subscription, то есть иметь те же методы, но со своей логикой.

User.js
Допишите конструктор пользователя, так, чтобы внутри устанавливалась реальная подписка если она передана снаружи и создавалась фейковая в ином случае.*/

//Subscription.js
class Subscription {
  constructor(subscriptionPlanName) {
    this.subscriptionPlanName = subscriptionPlanName;
  }

  hasProfessionalAccess() {
    return this.subscriptionPlanName === 'professional';
  }

  hasPremiumAccess() {
    return this.subscriptionPlanName === 'premium';
  }
}

export default Subscription;

//FakeSubscription.js
class FakeSubscription {
  constructor(user) {
    this.user = user;
  }

  hasProfessionalAccess() {
    return this.user.isAdmin();
  }

  hasPremiumAccess() {
    return this.user.isAdmin();
  }
}
export default FakeSubscription;

//User.js
import FakeSubscription from './FakeSubscription.js';

class User {
  constructor(email, currentSubscription = null) {
    this.email = email;

    this.currentSubscription = currentSubscription ?? new FakeSubscription(this);

  }

  getCurrentSubscription() {
    return this.currentSubscription;
  }

  isAdmin() {
    return this.email === 'rakhim@hexlet.io';
  }
}

export default User;
