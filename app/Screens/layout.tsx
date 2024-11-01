import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'
import * as SpashScreen from "expo-splash-screen" 
import { useNavigation } from 'expo-router'


SpashScreen.preventAutoHideAsync();
const ScreenLayout = (props,{children}) => {
  const [fontsLoaded] = useFonts({
    'outfit': require('@/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('@/assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('@/assets/fonts/Outfit-Bold.ttf'),
});
const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <Image 
        source={props.image} 
        style={{
          position: "absolute",
          zIndex: 40,
          top: "5%",
          left: "25%",
          width: 220,
          height: 470,
          objectFit: "fill"

        }}/>
      <View style={styles.subContainer}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 32,
            color: Colors.PRIMARY, 
            textAlign: 'center'
          }}>
            {props.title}
          </Text>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 25,
            color: Colors.GRAY,
            letterSpacing: 0.5,
            textAlign: 'center'

          }}>
            {props.description}
          </Text>



          {props.items1 &&<View style={styles.nextTab}>
            
            <View style={{
              width: "45%",
              height:"100%",
              borderRadius: 10,
              backgroundColor: Colors.PRIMARY,}
              }></View>
                
              <View style={{width: "25%",
                height:"100%",
                borderRadius: 10,
                backgroundColor: Colors.GRAY,}
              }></View>
                  
              <View style={{width: "25%",
                height:"100%",
                borderRadius: 10,
                backgroundColor: Colors.GRAY,
              }}></View>
              
          </View>}

          {props.items2 &&<View style={styles.nextTab}>
            <View style={{
                width: "25%",
                height:"100%",
                borderRadius: 10,
                backgroundColor: Colors.GRAY,}
              }></View>
            <View style={{
              width: "45%",
              height:"100%",
              borderRadius: 10,
              backgroundColor: Colors.PRIMARY,}
              }></View> 
            <View style={{
              width: "25%",
              height:"100%",
              borderRadius: 10,
              backgroundColor: Colors.GRAY,
            }}></View>
              
          </View>}

          {props.items3 &&<View style={styles.nextTab}>
                
              <View style={{width: "25%",
                height:"100%",
                borderRadius: 10,
                backgroundColor: Colors.GRAY,}
              }></View>
                  
              <View style={{width: "25%",
                height:"100%",
                borderRadius: 10,
                backgroundColor: Colors.GRAY,
              }}></View>
              <View style={{
              width: "45%",
              height:"100%",
              borderRadius: 10,
              backgroundColor: Colors.PRIMARY,}
              }></View>
              
          </View>}
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigation.navigate(props.nextScreen)}
        >
        <Text style={{
          fontFamily: "outfit",
          fontSize: 20,
          color: Colors.WHITE

        }}>{props.next}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenLayout

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
  subContainer:{
    display: "flex",
    alignContent:"center",
    justifyContent: "flex-start",
    gap: 15,
    flexDirection: "column",
    width: "105%",
    height: "55%",
    position: "absolute",
    zIndex: 10,
    top: "53%",
    left: 0,
    paddingTop: 99,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  button: {
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
  },
  nextTab:{
    display: "flex",
    gap: 2.5,
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 80,
    height: 10,
    left: "47%"
  }

})