import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair, FlatList, Image } from 'react-native'
import ProductsList from "../global/products.json"
import { CartStyle } from "./Cart.jsx"

const ProductView = ({ properties }) => {
	return (
		<TouchableOpacity>
			<View style={[CartStyle.container]}>
				<View style={[CartStyle.containerView, CartStyle.shadow]}>
					<Image style={[CartStyle.image]} source={{ uri: properties.image && properties.image.length > 0 ? properties.image : null }} />
					<Text style={[CartStyle.text]}>{properties.name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const Products = ({ navigation, route }) => {

	const { Category } = route || {}

	let prods = ProductsList.Products
	if (Category != null || Category != undefined) {
		prods = ProductsList.Products.filter((e => 
			e.Categories.includes(Category)
		))
	}

	return (
		<View>
			<FlatList
				data={prods}
				renderItem={({ item }) => <ProductView properties={item} />}
				keyExtractor={item => item.id || item.name}
			/>
		</View>

	)
}

export default Products