import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, BackHandler } from 'react-native';
import { useDispatch } from "react-redux";
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';

import SpaceComponent from '../components/SpaceComponent';
import { insertSession } from "../db/";
import { useLoginMutation } from "../services/authService";
import { setUser } from "../features/auth/authSlice";

const InputComponent = ({ placeholder, isPassword, state, setState, style }) => {
	return (
		<View style={[styles.inputContainer, style]}>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				onChangeText={setState}
				value={state}
				secureTextEntry={isPassword || false}
			/>
			<View style={styles.inputUnderline} />
		</View>
	)
}

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [firstEntry, setFirstEntry] = useState(true)
	const [validForm, setValidForm] = useState(false)
	const [triggerSignin, result] = useLoginMutation();
	const [login, setLogin] = useState(false)

	const handleLogin = () => {
		if (validForm && login == false) {
			setLogin(true)
			triggerSignin({ email, password });
		}
	};
	const dispatch = useDispatch()

	useEffect(() => {
		if (result.data) {
			dispatch(setUser(result.data));
			insertSession({
				email: result.data.email,
				localId: result.data.localId,
				token: result.data.idToken
			})
				.then((result) => console.log(result))
				.catch(err => console.log(err.message))
		}
	}, [result])

	useEffect(() => {
		const handleBackButton = () => {
			navigation.navigate("Init")
			return true
		}

		const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton)
		return () => backHandler.remove()
	}, []);

	useEffect(() => {

		if (email || password) {
			setFirstEntry(false)
		}

		const errors = []

		if (email) {
			const valid = email.search("@")
			if (valid < 0) {
				errors.push("Coloca un correo electronico valido")
			} else {
				const neww = email.substring(valid + 1)
				const dot = neww.search(/\./)
				if (dot < 0) {
					errors.push("Coloca un correo electronico valido")
				}
			}
		}

		if (password) {
			if (password.length <= 6) {
				errors.push("La contraseña debe tener un minimo de 6 caracteres")
			}
		}

		if (errors.length > 0) {
			setErrorMessage(errors[0])
			setValidForm(false)
		} else if (email != null && password != null) {
			setValidForm(true)
			setErrorMessage("")
		}
	}, [email, password])

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={() => {
				navigation.navigate("Init")
			}}>
				<Feather name="arrow-left" size={50} color="black" />
			</TouchableOpacity>
			<SpaceComponent h={50} />
			<Text style={styles.mainText}>{"Bienvenido!"}</Text>
			<SpaceComponent h={10} />
			<Text style={styles.altText}>{"Inicia sesion para continuar"}</Text>
			<SpaceComponent h={50} />
			<InputComponent placeholder="Correo electronico" isPassword={false} state={email} setState={setEmail} style={styles.email} />
			<SpaceComponent h={30} />
			<InputComponent placeholder="Contraseña" isPassword={true} style={styles.password} state={password} setState={setPassword} />
			<SpaceComponent h={30} />
			{validForm == true ? <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
				<Text style={[styles.centerText, styles.buttonText, styles.textFont, styles.textWhite]}>{"Iniciar sesion"}</Text>
			</TouchableOpacity> : null }
			<SpaceComponent h={15} />
			<TouchableOpacity>
				<Text style={styles.textBlue}>{"¿Olvidaste tu contraseña?"}</Text>
			</TouchableOpacity>

			<Text style={styles.alignBottom}>
				<View>
					<Text>{"No tienes una cuenta? "}</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
					<Text style={styles.textBlue}>{"Registrate!"}</Text>
				</TouchableOpacity>
			</Text>
			{errorMessage && firstEntry == false ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 40
	},
	email: {
		position: "relative",
		top: 0,
	},
	password: {
		position: "relative",
		top: 0,
	},
	confirmPassword: {
		position: "relative",
		top: 0,
	},
	backButton: {
		position: "absolute",
		top: 40,
		left: 40,
		width: 50,
		height: 50,
	},
	mainText: {
		position: "relative",
		top: 0,
		width: "100%",
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		fontSize: 34
	},
	altText: {
		position: "relative",
		top: 0,
		width: "100%",
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		color: "#808080",
		fontSize: 15
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 44,
	},
	input: {
		width: '100%',
		height: "100%",
		maxWidth: 700,
		borderColor: 'gray',
		paddingHorizontal: 10,
		fontSize: 16,
	},
	inputUnderline: {
		width: "100%",
		height: 1,
		position: "absolute",
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.35)",
	},
	button: {
		width: 220,
		height: 38,
	},
	loginButton: {
		borderWidth: 3,
		borderColor: '#F37E2C',
		backgroundColor: "#F37E2C",
		borderRadius: 6,
	},
	buttonText: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		textAlignVertical: "center",
		width: "100%",
		height: "100%",
		textAlign: "center",
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		fontSize: 15,
		color: "white",
	},
	textBlue: {
		color: "blue"
	},
	alignBottom: {
		position: "absolute",
		bottom: 25,
		left: "24%",
		paddingHorizontal: 12,

		width: "100%",
		height: 20,
	},
	errorMessage: {
		color: "red",
		fontSize: 14,
		fontWeight: "900"
	}
});

export default LoginScreen