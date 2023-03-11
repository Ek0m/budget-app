import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { colors } from '../themes'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {

    const navigation = useNavigation()

  return (
    <ScreenWrapper>
        <View className="h-full flex justify-around">
            <View className="flex-row justify-center mt-10">
                <Image source={require('../assets/images/welcome.gif')} className="h-96 w-96 shadow" />
            </View>

            <View className="mx-5 mb-20">
                <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>Budgeto</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}> 
                    <Text className="text-center text-white text-lg font-bold ">Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} className="shadow p-3 rounded-full" style={{backgroundColor: colors.button}}> 
                    <Text className="text-center text-white text-lg font-bold">Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScreenWrapper>
  )
}