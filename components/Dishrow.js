import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import tw from 'twrnc'

export const Dishrow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={tw`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-400 mt-2`}>
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              style={tw`h-20 w-20 bg-gray-300 p-4`}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center space-x-2 pb-3`}>
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};