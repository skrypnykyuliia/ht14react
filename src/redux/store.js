import { createStore } from "redux";
import rootReducer from "./reducers";


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Для работы с Redux DevTools
);

export default store;