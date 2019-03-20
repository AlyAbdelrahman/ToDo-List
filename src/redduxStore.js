import { createStore } from 'redux';
import TasksReducer from './reducers/Tasks';

const intialState = {
    data:[],
};

const store = createStore(TasksReducer, intialState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
