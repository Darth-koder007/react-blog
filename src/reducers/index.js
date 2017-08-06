import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  reducer: function(state = [], action) { return state }
});

export default rootReducer;
