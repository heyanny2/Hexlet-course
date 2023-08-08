/*TcpConnection.js
Реализуйте класс TcpConnection в соответствии с примером ниже. Для изменения состояния вам понадобится дополнительная внутренняя логика. 
Реализуйте её по своему усмотрению.
// На вход принимаются ip-адрес и порт
connection = new TcpConnection('132.223.243.88', 2342);
connection.connect();
connection.getCurrentState(); // connected
connection.write('data');
connection.disconnect();
connection.getCurrentState(); // disconnected
// Выбрасывает исключение если нет соединения
connection.disconnect(); // Boom!

states/Connected.js states/Disconnected.js
Реализуйте классы состояний так, как считаете нужным.*/

//TcpConnection.js
import DisconnectedState from './states/Disconnected.js';
import ConnectedState from './states/Connected.js';

export default class TcpConnection {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
    this.buffer = [];
    this.states = {
      connected: ConnectedState,
      disconnected: DisconnectedState,
    };
    this.setState('disconnected');
  }

  getCurrentState() {
    return this.currentState.getName();
  }

  write(data) {
    this.currentState.write(data);
  }

  connect() {
    this.currentState.connect();
  }

  disconnect() {
    this.currentState.disconnect();
  }

  setState(name) {
    this.currentState = new this.states[name](this);
  }
}

//states/Connected.js 
export default class Connected {
  constructor(connection) {
    this.connection = connection;
  }

  connect() {
    throw new Error('Already connected');
  }

  disconnect() {
    this.connection.setState('disconnected');
  }

  write(data) {
    this.connection.buffer.push(data);
  }

  getName() {
    return 'connected';
  }
}

//states/Disconnected.js
export default class Disconnected {
  constructor(connection) {
    this.connection = connection;
  }

  disconnect() {
    throw new Error('Already disconnected');
  }

  connect() {
    this.connection.setState('connected');
  }

  write() {
    throw new Error('Cannot write while disconnected');
  }

  getName() {
    return 'disconnected';
  }
}
