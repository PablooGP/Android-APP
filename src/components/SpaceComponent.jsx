import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SpaceComponent = ({ w, h }) => {
	return (
		<View style={
			StyleSheet.create({
				position: "relative",
				width: w || 0,
				height: h || 0,
				backgroundColor: "transparent",
			})
		}>
		</View>
	)
}

export default SpaceComponent