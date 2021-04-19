import { createStore, createTypedHooks } from "easy-peasy";
import model, { StoreModel } from "./models";

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState };

const store = createStore(model);

export default store;

