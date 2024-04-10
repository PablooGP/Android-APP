import { View, Text, StyleSheet, TextInput, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Images from '../global/images';

const InitScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.screen}>
				<Text style={styles.mainText}>{"Hola !"}</Text>
				<Text style={styles.altText}>{"Bienvenido a la mejor aplicacion de venta de componentes de computadora"}</Text>
				<TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() =>{
					navigation.navigate("Login")
				}}>
					<Text style={[styles.centerText, styles.buttonText, styles.textFont, styles.textWhite]}>{"Iniciar sesion"}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() =>{
					navigation.navigate("Signup")
				}}>
					<Text style={[styles.centerText, styles.buttonText, styles.textFont]}>{"Registrate"}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	centerText: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textAlign: "center",
	},
	screen: {
		backgroundColor: "white",
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 300,

		justifyContent: "center",
		alignItems: "center",
		
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,

		zIndex: 2,
	},
	appLogo: {
		width: 60,
		height: 60,
		position: "absolute",
		top: 25,
		left: 25
	},
	container: {
		position: "absolute",
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	mainText: {
		position: "absolute",
		width: "100%",
		textAlign: "center",
		bottom: 230,
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		fontSize: 34
	},
	altText: {
		position: "absolute",
		width: "100%",
		textAlign: "center",
		bottom: 180,
		fontFamily: "SignikaNegative",
		fontWeight: "800",
		color: "#808080",
		paddingHorizontal: 50,
		fontSize: 16,
		textAlign: "center",
	},
	loginButton: {
		position: "absolute",
		bottom: 100,

		borderWidth: 3,
		borderColor: '#F37E2C',
		backgroundColor: "#F37E2C",
		borderRadius: 6,
	},
	signupButton: {
		position: "absolute",
		bottom: 40,

		borderWidth: 3,
		borderColor: '#F37E2C',
		borderRadius: 6,
	},
	textFont: {
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		fontSize: 15,
		color: "#F37E2C",
	},
	textWhite: {
		color: "white",
	},
	button: {
		//backgroundColor: "black",
		width: 220,
		height: 38,
	},
	buttonText: {
		textAlign: "center",
		textAlignVertical: "center",
	},
	imageCenter: {
		position: "absolute",
		height: 300,
		width: 300,
		top: 200,
		left: "25%",

	}
})

export default InitScreen