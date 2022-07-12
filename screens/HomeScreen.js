import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native';
import {ChevronDownIcon,UserIcon,SearchIcon,AdjustmentsIcon, ChevronDoubleDownIcon} from 'react-native-heroicons/outline'
import tw from 'twrnc'
import Categories from '../components/Categories';

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    }, [])


  return (
    <SafeAreaView style={tw`bg-white pt-5`}>

      {/*Header*/}

        <View style={tw`flex-row pb-3 items-center mx-4 space-x-2`}>

            <Image 
            source={{
                uri: 'https://links.papareact.com/wru'
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
            />

            <View style={tw`ml-2 flex-1 justify-center`}>
                <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
                <Text style={tw`font-bold text-xl`}>Current Location
                    <ChevronDoubleDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>


            <UserIcon size={35} color="#00CCBB"/>

        </View>

        {/*Search*/}

        <View style={tw`flex-row items-center space-x-2 pb-2 mx-4 `}>
            <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3`}>
                <SearchIcon color="gray" size={20}/>
                <TextInput placeholder='Restaurants and Cuisines' keyboardType='default'/>
            </View>

            <AdjustmentsIcon color="#00CCBB"/>
        </View>

        {/*Body*/} 

        <ScrollView style={[tw`bg-gray-100 flex-1`, {paddingBottom: 100}]}>
            
            {/*Categories*/}

            <Categories/>

            {/*Feature Rows*/}

        </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreen