import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair } from 'react-native'

const w = 26 // x
const h = 26 // y
const Style = StyleSheet.create({

	container: {
		position: "absolute",
		flexDirection: "row",
		display: "flex",
		height: h,
		backgroundColor: "#e6e6e6",
		borderColor: "black",
		borderRadius: 8,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.22,
		shadowRadius: 9.22,
		elevation: 6
	},
	defaultButtonSize: {
		width: w,
		height: h,
	},
	textInput: {
		fontSize: 14,
		width: w,
		height: "100%",
		backgroundColor: "#e6e6e6"
		
	},
	text: {
		width: "100%",
		height: "100%",
		fontSize: 20,
		fontFamily: "Josefin",
		fontWeight: 900
	},
	textMid: {
		display: "flex",
		textAlign: "center",
		textAlignVertical: "center"
	}
})

const ItemCounter = ({ position, buttonSize, fontSize, set, quantity }) => {

	const counterUpdate = (n) => {
		const Limit = Math.max(1, quantity + n) // Para que no baje de 1
		set(Limit)
	}

	return (
		<View style={[Style.container, position]}>
			<TouchableOpacity style={buttonSize || Style.defaultButtonSize} onPress={() => counterUpdate(-1)}>
				<Text style={[Style.text, Style.textMid, fontSize ? {fontSize: fontSize*1.4} : null]}>{"-"}</Text>
			</TouchableOpacity>
			<Text style={[Style.textInput, Style.textMid, fontSize ? {fontSize} : null]}>{quantity}</Text>
			<TouchableOpacity style={buttonSize || Style.defaultButtonSize} onPress={() => counterUpdate(1)}>
				<Text style={[Style.text, Style.textMid, fontSize ? {fontSize: fontSize*1.4} : null]}>{"+"}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ItemCounter