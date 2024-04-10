import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const AddToCart = ({onPress}) => {
	return (
		<View style={Styles.container}>
			<TouchableOpacity style={{position: "absolute", width: "100%", height: "100%"}} onPress={onPress}>
				<Text style={Styles.text}>{"Agregar al carrito"}</Text>
			</TouchableOpacity>
		</View>

	)
}

const Styles = StyleSheet.create({
	container: {
		width: "65%",
		backgroundColor: "#30c758",
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
	text: {
		textAlign: "center",
		width: "100%",
		height: "100%",
		textAlignVertical: "center",
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		fontSize: 18,
		color: "white",
	}
})

export default AddToCart