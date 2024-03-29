import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair } from 'react-native'
import ExtraData from "../global/extra.json"

const Style = StyleSheet.create({

})

const Category = ({ navigation }) => {
	const renderCategory = (categoryType) => {
		navigation.navigate("Products", {Category: categoryType})
	}

	return (
		<View>
			{
				ExtraData.Categories.map((cat, index) => 
					<TouchableOpacity key={index} onPress={()=>renderCategory(cat)}>
						<Text>{cat}</Text>
					</TouchableOpacity>
				)
			}
		</View>
	)
}

export default Category