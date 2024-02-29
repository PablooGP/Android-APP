import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair, FlatList, Image } from 'react-native'
import Styles from '../styles/Styles.js'

import { HorizontalProductItemStyle } from '../styles/Styles.js'

import { ConvertPrice } from "../global/functions.js"

const ProductItemHorizontal = ({ navigation, product}) => {
	
	const onButtonPress = () => {
		navigation.navigate("product", {
			itemId: product.id
		})
	}

	return (
		<View style={[HorizontalProductItemStyle.container]}>
			<Pressable style={[HorizontalProductItemStyle.containerView, Styles.lowShadow]} onPress={onButtonPress}>
				<Image style={[HorizontalProductItemStyle.image]} source={{ uri: product.image && product.image.length > 0 ? product.image : null }} />
				<Text style={[HorizontalProductItemStyle.textFont, HorizontalProductItemStyle.productName]} numberOfLines={2}>{product.name}</Text>
				<Text style={[HorizontalProductItemStyle.productPrice, HorizontalProductItemStyle.textFont]}>{ConvertPrice(product.price || 9999, ".")}</Text>
			</Pressable>
		</View>
	)
}

export { ProductItemHorizontal }