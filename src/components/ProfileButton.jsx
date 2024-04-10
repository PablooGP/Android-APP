import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import StylesConfiguration from '../global/StylesConfiguration'

import SpaceComponent from './SpaceComponent'
const ProfileButton = ({ onPress, text, children }) => {

	return (
		<TouchableOpacity onPress={onPress} style={Styles.buttonContainer}>
			<View style={Styles.buttonIcon}>
				{children}
			</View>
			<SpaceComponent w={25} />
			<Text style={[Styles.buttonText, Styles.textStyle]}>{text}</Text>
		</TouchableOpacity>
	)
}

const Styles = StyleSheet.create({
	textStyle: {
		textAlign: "center",
		fontFamily: "SignikaNegative",
	},
	buttonIcon: {
		width: 54,
		height: 54,
		backgroundColor: StylesConfiguration.MainColor,
		borderRadius: 44,
	},
	iconPos: {
		left: 12,
		top: 12,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "900",
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
	}
})

export default ProfileButton