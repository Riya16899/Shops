import { combineReducers } from 'redux';

import ShopsDataReducer from './shopsDataReducer';
const appReducer = combineReducers({
    ShopsDataReducer
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;