import React from 'react';

import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import Routes from '~/routes';
import store from '~/store/store';
import { setLocalTextLang } from '~/modules/Translate/actions';

import { Translate } from '~/modules/Translate/screens/';

console.disableYellowBox = true;

store.dispatch(setLocalTextLang('pt-BR'));

const App = () => (
  <Provider store={store}>
    <Translate>
      <Routes />
    </Translate>
  </Provider>
);
export default App;
