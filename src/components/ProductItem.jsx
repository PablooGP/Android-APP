import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair, FlatList, Image } from 'react-native'
import Styles from '../styles/Styles.js'
import { useDispatch } from "react-redux";

import { HorizontalProductItemStyle } from '../styles/Styles.js'

import { ConvertPrice } from "../global/functions.js"
import ItemCounter from './ItemCounter.jsx'
import { removeItem } from "../features/shop/cartSlice";

const ProductItemHorizontal = ({ navigation, product, isCart }) => {

	const dispatch = useDispatch()
	
	const onButtonPress = () => {
		navigation.navigate("ProductsTab", {
			item: product
		})
	}

	const deleteItemFromCart = () => {
		dispatch(removeItem(product))
	}

	return (
		<View style={[HorizontalProductItemStyle.container]}>
			<Pressable style={[HorizontalProductItemStyle.containerView, Styles.lowShadow]} onPress={onButtonPress}>
				<Image style={[HorizontalProductItemStyle.image]} source={{ uri: product.image && product.image.length > 0 ? product.image : null }} />
				<Text style={[HorizontalProductItemStyle.textFont, HorizontalProductItemStyle.productName]} numberOfLines={2}>{product.name}</Text>
				<Text style={[HorizontalProductItemStyle.productPrice, HorizontalProductItemStyle.textFont, (isCart == true ? {bottom: 37} : null)]}>{ConvertPrice(product.price || 9999, ".")}</Text>
				{isCart == true ? <ItemCounter position={{bottom: 5, left: 105}} quantity={product.quantity} /> : null}
				{isCart == true ? <TouchableOpacity style={[HorizontalProductItemStyle.createButton]} onPress={deleteItemFromCart}>
					<Image style={[HorizontalProductItemStyle.deleteImage]} source={require("../Images/trash_icon.png")} />
				</TouchableOpacity> : null}
			</Pressable>
		</View>
	)
}

export { ProductItemHorizontal }