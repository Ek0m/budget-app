import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { colors } from '../themes'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'

export default function AddEvent() {

    const [event, setEvent] = useState('');
    const [reason, setReason] = useState('');

    const navigation = useNavigation()

    const handleAddEvent = () => {
        if(event && reason){
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
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Add Event</Text>
            </View>

            <View className="flex-row justify-center my-3 mt-5">
                <Image className="h-72 w-72" source={require('../assets/images/4.png')} />
            </View>

            <View className="space-y-2 mx-2">
                <Text className={`${colors.heading} text-lg font-bold`}>What's the Event?</Text>
                <TextInput value={event} onChangeText={value => setEvent(value)} className="p-4 bg-white rounded-full mb-3" />
                <Text  className={`${colors.heading} text-lg font-bold`}>Whats the Reason?</Text>
                <TextInput value={reason} onChangeText={value => setReason(value)} className="p-4 bg-white rounded-full mb-3" />
            </View>
        </View>

        

        <View>
            <TouchableOpacity onPress={handleAddEvent} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">Add Event</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}