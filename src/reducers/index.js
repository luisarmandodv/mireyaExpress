import {combineReducers} from 'redux';

import fakeReducer from './fakeReducer';

const rootReducer = combineReducers({
  fakes: fakeReducer
});

export default rootReducer;
