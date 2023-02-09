import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);

store.subcribe(() => {
  console.log(store);
});

export default store;
