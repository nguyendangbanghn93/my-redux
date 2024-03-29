import editStatusReducer from '../reducers/editStatusReducer';
import numReducer from '../reducers/numReducer';

const redux = require('redux');
const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})
const store1 = redux.createStore(allReducers);
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})
export default store1;