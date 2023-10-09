import { createStore } from 'redux';
import expenseReducer from './reducer';

const store = createStore(expenseReducer);

export default store;
