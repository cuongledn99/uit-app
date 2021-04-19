import transaction, { NotificationModel } from "./notification";


export interface StoreModel {
  transaction: NotificationModel;

};

const model: StoreModel = {
  transaction,
};

export default model;