import { StyleSheet, Text, View } from 'react-native';
import Home from './scr/components/Home/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './scr/components/Details/Details';
import Splash from './scr/components/onboarding/Splash';
import Navbar from './scr/components/Navbar';





const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='Splash' component={Splash}  options={{headerTransparent: true}} />
        <Stack.Screen name='Home' component={Home}  options={{headerTransparent: true}}/>
        <Stack.Screen name='Details' component={Details}  options={{headerTransparent:true, header: ({navigation}) => <Navbar navigation={navigation}/>,}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

// screenOptions={{
//   headerShown: false,
// }}

