import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { useSelector } from 'react-redux';
import AddEvent from '../screens/AddEvent';
import AddExpense from '../screens/AddExpense';
import EventExpense from '../screens/EventExpense';
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

export const AppNavigation = () => {

  const {user} = useSelector(state => state.user)

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="AddEvent" component={AddEvent} />
          <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpense} />
          <Stack.Screen options={{headerShown: false}} name="EventExpense" component={EventExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUp} />
          <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="LogIn" component={LogIn} />
          <Stack.Screen options={{headerShown: false}} name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

 
}





