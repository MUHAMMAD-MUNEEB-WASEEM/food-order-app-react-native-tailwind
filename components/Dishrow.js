import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import tw from 'twrnc'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsWithId } from "../features/cartSlice";

export const Dishrow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector(state => selectCartItemsWithId(state, id))
  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(addToCart({ id, name, description, price, image }))
  }

  const removeItemsFromCart = () => {
    if (!items.length > 0) return
    dispatch(removeFromCart({ id }))
  }

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
            <TouchableOpacity disabled={!items.length} onPress={removeItemsFromCart}>
              <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"}/>
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToCart}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};