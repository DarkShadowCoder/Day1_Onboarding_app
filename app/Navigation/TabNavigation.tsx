import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import OnboardingScreen1 from '../Screens/OnboardingScreen/Screen1'
import OnboardingScreen3 from '../Screens/OnboardingScreen/Screen3'
import OnboardingScreen2 from '../Screens/OnboardingScreen/Screen2'
import GetStarted from '../GetStarted'


const Stack = createNativeStackNavigator()
const TabNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='getStarted' component={GetStarted}/>
      <Stack.Screen name='screen1' component={OnboardingScreen1} />
      <Stack.Screen name='screen2' component={OnboardingScreen2} />
      <Stack.Screen name='screen3' component={OnboardingScreen3} />
    </Stack.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})