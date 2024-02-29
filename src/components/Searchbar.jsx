import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { PrimaryColor, SecondaryColor } from '../styles/ColorDesign'

import { FontAwesome, Entypo, AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
import Styles from '../styles/Styles';

const Style = StyleSheet.create({
	bar: {
		position: "absolute",
		width: "auto",
		height: 40,
		backgroundColor: PrimaryColor,
		flexDirection: 'row',
		alignItems: 'center',
		left: 50,
		right: 50,
		bottom: 10,
		borderRadius: 20,
	},
	input: {
		position: "absolute",
		width: "100%",
		height: "100%",
		paddingRight: 40,
		flex: 1,
		alignItems: 'center',
		textAlign: "center",
	},
	pressable: {
		position: "absolute",
		height: "100%",
		right: 0,
		top: 0,
		zIndex: 1,
		aspectRatio: 1/1,
		backgroundColor: SecondaryColor,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
	},
	vector: {
		position: "relative",
		justifyContent: "center",
		padding: "25%",
		display: "flex",
		top: -1,
		left: -1,
		width: "auto",
		height: "auto"
	}
})

const Searchbar = ({ setKeyword }) => {

	const onTextChanged = (text) => {
		return setKeyword(text)
	}

	return (
		<View style={[Style.bar, Styles.shadow1]}>
			<TextInput style={Style.input} placeholder="Busqueda de productos" onChangeText={onTextChanged} />
			<Pressable style={Style.pressable}>
				<FontAwesome5 name="search" style={Style.vector} size={20} color="white"/>
			</Pressable>
		</View>
	)
}

export default Searchbar