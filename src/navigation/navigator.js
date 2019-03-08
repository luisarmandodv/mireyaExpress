import Login from '../screens/Login';
import { createStackNavigator } from 'react-navigation';

export const AppNavigator = createStackNavigator({
  login: {
    screen: Login
  }
});
