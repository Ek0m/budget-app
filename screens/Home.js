import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { colors } from '../themes'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'

const items = [
    {
        id: 1,
        event: 'Gujrat',
        reason: 'Pakistan'
    },

    {
        id: 2,
        event: 'London Eye',
        reason: 'England'
    },

    {
        id: 3,
        event: 'Washington DC',
        reason: 'America'
    },

    {
        id: 4,
        event: 'New York',
        reason: 'America'
    },
]

export default function Home() {

    const navigation = useNavigation()
  return (
    <ScreenWrapper className="flex-1">
        <View className="flex-row justify-between items-center p-4">
            <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Budgeto</Text>
            <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                <Text className={colors.heading}>Log out</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
            <Image source={require('../assets/images/banner.png')} className="w-60 h-60 " />
        </View>
        <View className="px-4 space-y-4">
            <View className="flex-row justify-between items-center ">
                <Text className={`${colors.heading} font-bold text-xl`} >Recent Events</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddEvent') } className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                    <Text>Add Event</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 430}}>
                <FlatList 
                    data={items}
                    numColumns={2}
                    ListEmptyComponent={<EmptyList message={"You haven't recorded any event yet"} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                    }}
                    className="mx-1"
                    renderItem={({item}) =>{
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('EventExpense', {...item})} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                                <View>
                                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                                    <Text className={`${colors.heading} font-bold`}>{item.event}</Text>
                                    <Text className={`${colors.heading} text-xs`}>{item.reason}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    </ScreenWrapper>
  )
}