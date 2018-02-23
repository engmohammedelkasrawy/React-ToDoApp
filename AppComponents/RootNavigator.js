import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Login from './Login';



const RootNavigator = StackNavigator({
  Home: { 
        screen: Home,
        navigationOptions:{
         title: "Home"
        }
},
  Login: { 
            screen: Login ,       
            navigationOptions:{
             title: "Login"
        }
          },
});
export default RootNavigator;