import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair, FlatList, Image } from 'react-native'
import Styles from '../styles/Styles.js'
import { useDispatch } from "react-redux";

import { HorizontalProductItemStyle } from '../styles/Styles.js'

import { ConvertPrice } from "../global/functions.js"
import ItemCounter from './ItemCounter.jsx'
import { removeItem, updateItemQuantity } from "../features/shop/cartSlice";

const ProductItemHorizontal = ({ navigation, product, isCart, requestDelete }) => {

	const dispatch = useDispatch()

	const [cartQuantity, setCartQuantity] = useState(product.quantity)

	const onButtonPress = () => {
		if (navigation) {
			navigation.navigate("ProductsTab", {
				item: product
			})
		}

	}

	const onPress = (newQuantity) => {
		dispatch(updateItemQuantity({name: product.name, quantity: newQuantity}))
	}

	const deleteItemFromCart = () => {
		requestDelete(product)
	}

	return (
		<View style={[HorizontalProductItemStyle.container]}>
			<Pressable style={[HorizontalProductItemStyle.containerView, Styles.lowShadow]} onPress={onButtonPress}>
				<Image style={[HorizontalProductItemStyle.image]} source={{ uri: product.image && product.image.length > 0 ? product.image : null }} />
				<Text style={[HorizontalProductItemStyle.textFont, HorizontalProductItemStyle.productName]} numberOfLines={2}>{product.name}</Text>
				<Text style={[HorizontalProductItemStyle.productPrice, HorizontalProductItemStyle.textFont, (isCart == true ? { bottom: 37 } : null)]}>{ConvertPrice(product.price || 9999, ".")}</Text>
				{isCart == true ? <ItemCounter set={setCartQuantity} position={{ bottom: 5, left: 105 }} quantity={cartQuantity} onPress={onPress} /> : null}
				{isCart == true ? <TouchableOpacity style={[HorizontalProductItemStyle.createButton]} onPress={deleteItemFromCart}>
					<Image style={[HorizontalProductItemStyle.deleteImage]} source={require("../Images/trash_icon.png")} />
				</TouchableOpacity> : null}
			</Pressable>
		</View>
	)
}

export { ProductItemHorizontal }