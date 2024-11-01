import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenLayout from '../layout'
import { Colors } from '@/constants/Colors'

const OnboardingScreen1 = () => {
  return (
    <ScreenLayout 
    image={require("@/assets/images/floor1.png")}
    nextScreen="screen2"
    next= "Next"
    title="Easily identify plants"
    description="Snap a photo and let our AI do the rest."
    items1={true}
    >
            
    </ScreenLayout>

  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({})