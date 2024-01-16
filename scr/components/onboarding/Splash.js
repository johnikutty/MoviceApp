import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'

const Splash = ({navigation}) => {

    setTimeout(()=> {
        navigation.replace('Home')
    },3000)
  return (
    // <View  style={{
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: '#1A1A23',
    //   padding: 0,
    //   position: 'relative',
    // }}>
      // </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',
      alignItems:'center',backgroundColor:'#1A1A23'}}>
        <StatusBar  barStyle='light-content' hidden={false} backgroundColor={"#465bd8"}/>
        
    




    <Image source={require('../../../assets/images/p.png')} style={{width:100,height:100}}  />
      </View>
    
 
    
   
  )
}

export default Splash

const styles = StyleSheet.create({})