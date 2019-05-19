import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import App from '~/modules/App/screens/AppScreen';

const Routes = createAppContainer(createSwitchNavigator({ App }));

export default Routes;
