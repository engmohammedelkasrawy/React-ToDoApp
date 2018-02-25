import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Login from './Login';



const RootNavigator = StackNavigator({
   Login: { 
            screen: Login ,       
            navigationOptions:{
             title: "Login"
        }},
    
    Home: { 
        screen: Home,
        navigationOptions:{
         title: "Home"
        }
}
          
});
export default RootNavigator;