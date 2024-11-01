import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenLayout from '../layout'

const OnboardingScreen3 = () => {
  return (
    <ScreenLayout
    image={require("@/assets/images/floor1.png")}
    nextScreen="getStarted"
    next= "Skip"
    title="Recieve tailored care tips"
    description="Get advice specific to each of your plants needs."
    items3={true}
    />
  )
}

export default OnboardingScreen3

const styles = StyleSheet.create({})