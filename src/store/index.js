import { createStore, thunk, action } from "easy-peasy";
import axios from "axios";
import { fetchTransactions } from './../api/transactions'





const store = createStore({
  globalStore: {
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


});

export { store };
