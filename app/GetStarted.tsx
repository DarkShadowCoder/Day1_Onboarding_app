import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'
import * as SpashScreen from "expo-splash-screen" 
import { useNavigation } from 'expo-router'


SpashScreen.preventAutoHideAsync();
const GetStarted = () => {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
});
const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
          
        }}>
          <Text style={styles.title}>Welcome to </Text>
          <Text style={styles.customTitle}>Plantastic</Text>
        </View>
        <Text style={{
          fontSize: 22,
          fontFamily: 'outfit',
          color: Colors.GRAY,
          paddingTop: 4,
          letterSpacing: 2,
          paddingHorizontal: 8
          }}>
            Your personal plant care companion.
        </Text>
      </View>
      <View>
        <Image 
        source={require("../assets/images/floors.png")} 
        style={{
          width: "90%", 
          height: "100%", 
          objectFit: "contain",
          position: "relative",
          top: -90,
          left: -60,
        }}
        />
      </View>
      <TouchableOpacity 
        style={{
          backgroundColor: Colors.PRIMARY,
          borderRadius: 12,
          width: 180,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 50,
          bottom: 80,
          left: "30%"
        }}
        onPress={()=>navigation.navigate('screen1')}
        >
        <Text style={{
          fontFamily: "outfit",
          fontSize: 20,
          color: Colors.WHITE

        }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE_SMOK,

  },
  title:{
    fontSize: 38,
    fontFamily: 'outfit',
    fontWeight: 'semibold',
  },
  customTitle:{
    fontSize: 38,
    fontFamily: 'outfit-medium',
    color: Colors.PRIMARY,
  }
})