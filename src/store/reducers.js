import { combineReducers } from 'redux';
import initialState from '~/store/initialState';

// Reducers
import localeState from '~/modules/Translate/reducers/TranslateReducer';

const appReducer = combineReducers({
  localeState,
});

const rootReducer = (state, action) => {
  if (action.type === 'NO_TOKEN') {
    return initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
