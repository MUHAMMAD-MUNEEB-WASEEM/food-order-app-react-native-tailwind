import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { Dishrow } from "../components/Dishrow";
import { urlFor } from "../sanity";
import tw from 'twrnc'
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../features/restaurantSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const RestaurantScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();


  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>

      <BasketIcon />

      <ScrollView>
        <View style={tw`relative`}>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            style={tw`w-full h-56 bg-gray-500 p-4`}
          />
          <TouchableOpacity
            style={tw`absolute top-14 left-5 p-2 bg-gray-200 rounded-full`}
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold`}>{title}</Text>
            <View style={tw`flex-row space-x-2 my-1`}>
              <View style={tw`flex-row  items-center space-x-1`}>
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text style={tw`text-xs text-gray-500`}>
                  <Text style={tw`text-green-500`}>{rating} </Text>. {genre}
                </Text>
                <LocationMarkerIcon color="gray" opacity={0.5} size={22} />
                <Text style={tw`text-xs text-gray-500`}>
                  <Text>{address} </Text>
                </Text>
              </View>
            </View>
            <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
          </View>

          <TouchableOpacity style={tw`flex-row items-center space-x-2 p-4 border-y border-gray-300`}>
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text style={tw`pl-2 flex-1 text-md font-bold`}>
              Alguna alergia?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View style={tw`pb-36`}>
          <Text style={tw`px-4 pt-6 font-bold text-xl`}>Menu</Text>

          {dishes.map((dish) => (
            <Dishrow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;