import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function ScreenWrapper({children}) {

    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight: Platform.OS == 'ios'? 100: 0

  return (
    <View style={{paddingTop: 40}}>
      {
        children
      }
    </View>
  )
}