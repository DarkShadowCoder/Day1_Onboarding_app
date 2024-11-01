import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenLayout from '../layout'

const OnboardingScreen2 = () => {
  return (
    <ScreenLayout 
    image={require("@/assets/images/floor2.png")}
    nextScreen="screen3"
    next= "Next"
    title="Recieve tailored care tips"
    description="Get advice specific to each of your plants needs."
    items2={true}
    />
  )
}

export default OnboardingScreen2

const styles = StyleSheet.create({})