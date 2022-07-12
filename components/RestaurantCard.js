import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { urlFor } from '../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,}) => {
        
        const navigation = useNavigation();
        
        return (
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Restaurant',{
              id,
              imgUrl,
              title,
              rating,
              genre,
              address,
              short_description,
              dishes,
              long,
              lat,
            });
          }}
          style={tw`bg-white mr-3 shadow w-[256px]`}>
            
            <View style={tw`h-36 w-[256px] rounded-sm items-center justify-center flex-row`}>
              <Image 
              source={{
                uri: urlFor(imgUrl).url()
                }}
                resizeMode='cover'
                
                style={tw`h-full w-full rounded-sm self-center justify-self-center`}
              />
            </View>
      
            <View style={tw`px-3 pb-4`}>
              <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
              <View style={tw`flex-row items-center space-x-1`}>
                  <StarIcon color='green' opacity={0.5} size={22}/>
                  <Text style={tw`text-xs text-gray-500`}>
                     <Text style={tw`text-green-500`}>{rating}</Text> • {genre}
                  </Text>
              </View>
              <View style={tw`flex-row items-center space-x-1 flex-1 whitespace-normal`}>
                  <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
                  <Text style={tw`text-sm text-gray-500`}>Nearby • {address}</Text>
              </View>
            </View>
      
          </TouchableOpacity>
        )
      }
      

export default RestaurantCard