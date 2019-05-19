import initialState from '~/store/initialState';
import { translate } from '~/Locale/';
import { SET_LOCAL_TEXT_LANG } from '../types';

const usedLocales = ['en-US', 'pt-BR'];

const translateReducer = (state = initialState.localText, action) => {
  switch (action.type) {
    case SET_LOCAL_TEXT_LANG:
      return {
        ...state,
        localText: usedLocales.includes(action.lang) ? translate[action.lang] : translate['pt-BR'],
      };
    default:
      return state;
  }
};
export default translateReducer;
