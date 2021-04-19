import axios from 'axios';
import { Action, action, Thunk, thunk } from "easy-peasy";

const TRANSACTION_API = 'https://5f7e84300198da0016893989.mockapi.io/api/transaction';

export interface NotificationModel {
  items: object[];
  local: Action<NotificationModel, object>;
  fetchtran:Thunk<NotificationModel, object>;
}

const transaction: NotificationModel = {
  items: [],
  local: action((state, payload) => {
    state.items = [
        ...state.items,
        payload
    ]
  }),
  fetchtran: thunk(async(actions,payload) =>{
    const result = await axios.get(TRANSACTION_API,payload);
    actions.local(result.data);
  })
};

export default transaction;