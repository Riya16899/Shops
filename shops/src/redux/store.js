import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import saga from "./saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );
  sagaMiddleware.run(saga);
  return store;
}

const store = configureStore();

export default store;