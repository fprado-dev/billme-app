import initialState from '~/store/initialState';
import { translate } from '~/Locale';
import reducer from './index';
import { SET_LOCAL_TEXT_LANG } from '../types';

describe('Translate/Reducer', () => {
  it('should set initialState when has not valid Action', async () => {
    const MOCK_ACTION = 'MOCK_ACTION';
    const state = reducer(initialState.localText, MOCK_ACTION);
    expect(state).toEqual(initialState.localText);
  });

  it('should set Language in initialState', () => {
    const brState = reducer(initialState.localText, {
      type: SET_LOCAL_TEXT_LANG,
      lang: 'pt-BR',
    });
    expect(brState).toEqual({
      localText: translate['pt-BR'],
    });
  });
  it('should set en language em send this keyword', () => {
    const esState = reducer(initialState.localText, {
      type: SET_LOCAL_TEXT_LANG,
      lang: 'en-US',
    });
    expect(esState).toEqual({
      localText: translate.en,
    });
  });
});
