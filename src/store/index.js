import { createStore, thunk, action } from "easy-peasy";
import axios from "axios";
import { fetchTransactions, fetchBalance } from './../api/transactions'





const store = createStore({
  globalStore: {
    balance: {
      data: 0
    },
    transactions: [],
    notifications: []
  },

  pushLocalTransactions: action((state, payload) => {
    state.globalStore.transactions = [...state.globalStore.transactions, ...payload];
  }),
  fetchListTransaction: thunk(async (actions) => {
    const data = await fetchTransactions()
    // console.log(data, '==data==')
    actions.pushLocalTransactions(data);
    // console.log(data);
  }),

  setBalance: action((state, payload) => {
    state.globalStore.balance = {
      data: payload
    }
  }),
  fetchBalance: thunk(async (actions) => {
    const data = await fetchBalance("6080319786d58936b25c5a21")
    actions.setBalance(data)
  })

});

export { store };