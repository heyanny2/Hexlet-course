/*Реализуйте функцию applyTransactions и типы Transaction, Wallet.
applyTransactions должна принимать аргумент типа Wallet и возвращать число, после применения всех транзакций к количеству денег на счету.
В случае ошибки в одной из транзакций должно вернуться изначальное число, последующие транзакции не обрабатываются. */

type Transaction = {
  apply: (amount: number) => number;
};

type Wallet = {
  transactions: Transaction[];
  balance: number;
};

const applyTransactions = (wallet: Wallet) => {
  const { transactions, balance } = wallet;
  try {
    return transactions.reduce((acc, value) => value.apply(acc), balance)
  } catch (e) {
    return wallet.balance;
  }
};

export type { Transaction, Wallet };
export default applyTransactions;
