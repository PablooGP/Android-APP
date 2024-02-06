import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	container: {
		zIndex: 5,
		position: "absolute",
		width: "100%",
		height: 64,
		backgroundColor: "green",
		bottom: 0,
	}
})

const Bottombar = () => {
	return (
		<View style={Styles.container}>
		</View>
	)
}

export default Bottombar