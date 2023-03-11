import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { colors } from '../themes'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'

export default function AddEvent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    const handleLogIn = () => {
        if(email && password){
          navigation.goBack()
            navigation.navigate('Home')
        }else{

        }
    }


  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View >
            <View className="relative mt-5">
                <View className="absolute top-0 left-0">
                    <BackButton />
                </View>
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign Up</Text>
            </View>

            <View className="flex-row justify-center my-3 mt-5">
                <Image className="h-72 w-72" source={require('../assets/images/login.png')} />
            </View>

            <View className="space-y-2 mx-2">
                <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
                <TextInput value={email} onChangeText={value => setEmail(value)} className="p-4 bg-white rounded-full mb-3" />
                <Text  className={`${colors.heading} text-lg font-bold`}>Password</Text>
                <TextInput value={password} onChangeText={value => setPassword(value)} className="p-4 bg-white rounded-full mb-3" />
                
            </View>
        </View>

        

        <View>
            <TouchableOpacity onPress={handleLogIn} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}