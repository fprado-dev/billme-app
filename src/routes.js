import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/modules/Login/screens/LoginScreen';

const Routes = createAppContainer(createSwitchNavigator({ Login }));

export default Routes;
