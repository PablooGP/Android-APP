import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shop/shopSlice"

import GlobalStyles from '../styles/Styles.js'

const CategoryItem = ({ navigation, data }) => {

	const dispatch = useDispatch()

	const toCategory = () => {
		if (data.name == "Todos los productos") {
			dispatch(setCategorySelected("all"))
			navigation.navigate("ProductsTab", { category: "all" });
		} else {
			dispatch(setCategorySelected(data.name))
			navigation.navigate("ProductsTab", { category: data.name });
		}
		
	}

	return (
		<TouchableOpacity style={[Styles.container]} onPress={toCategory}>
			<View style={[Styles.bg, GlobalStyles.lowShadow, GlobalStyles.containerView]}>
				<Text style={Styles.text}>{"Ver categoria de:"}</Text>
				<Text style={Styles.name}>{data.name}</Text>
				<Text style={Styles.value}>{data.items}</Text>
			</View>
		</TouchableOpacity>
	)
}

const Styles = StyleSheet.create({
	container: {
		left: 5,
		top: 5,
		width: "100%",
		height: 80,
		paddingHorizontal: 5,
		paddingVertical: 5,
		backgroundColor: "transparent",
	},
	bg: {
		width: "100%",
		height: "100%",
		position: "absolute",
		backgroundColor: "#FAFAFAFA",
		borderRadius: 20,
	},
	name: {
		position: "absolute",
		width: "100%",
		left: 15,
		bottom: 20,
		fontSize: 20,
		fontFamily: "SignikaNegative",
		fontWeight: "900",
	},
	value: {
		position: "absolute",
		width: "100%",
		right: 15,
		bottom: 20,
		fontSize: 20,
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		textAlign: "right",
	},
	text: {
		display: "none",
		position: "absolute",
		width: "100%",
		left: 15,
		fontSize: 16,
		fontFamily: "SignikaNegative",
		textAlign: "left",
	}
})


export default CategoryItem