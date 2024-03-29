import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	customBtnText: {
		fontSize: 40,
		fontWeight: '400',
		color: "#fff",
	},
	customBtnBG: {
		backgroundColor: "#007aff",
		paddingHorizontal: 30,
		paddingVertical: 5,
		borderRadius: 30
	}
});

export default class CustomButton extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.customBtnBG}
					onPress={() => { }}  >
					<Text style={styles.customBtnText}>Button</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
