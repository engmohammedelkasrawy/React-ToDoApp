import {StackNavigator} from 'react-navigation';
import Header from './Header';
import Login from './Login';



const RootNavigator = StackNavigator({
  Home: { screen: Header },
  Login: { screen: Login },
});
export default RootNavigator;