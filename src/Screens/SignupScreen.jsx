import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, BackHandler } from 'react-native';
import { Image } from 'expo-image';
import { useDispatch } from "react-redux";
import { Feather } from '@expo/vector-icons';

import SpaceComponent from '../components/SpaceComponent';
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";

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

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [firstEntry, setFirstEntry] = useState(true)
	const [validForm, setValidForm] = useState(false)
	const [register, setRegister] = useState(false)
	const [triggerSignup, result] = useSignUpMutation();

	const dispatch = useDispatch()

	const onRegister = () => {
		if (validForm && register == false) {
			setRegister(true)
			try {
				//signupSchema.validateSync({ password, confirmPassword, email });
				const a = triggerSignup({ email, password });
				console.log(a)
				console.log(result)
				console.log("Registro exitoso");
			} catch (err) {
				console.log(err)
				setRegister(false)
			}
		}
	};
	
	useEffect(() => {
		if (result.data) {
			dispatch(setUser(result.data));
		}
	}, [result]);



	useEffect(() => {

		if (email || password || confirmPassword) {
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
			if (password != confirmPassword) {
				errors.push("Las contraseñas no coinciden")
			}

			if (password.length <= 6) {
				errors.push("La contraseña debe tener un minimo de 6 caracteres")
			}
		}

		if (errors.length > 0) {
			setErrorMessage(errors[0])
			setValidForm(false)
		} else if (email != null && password != null && confirmPassword != null) {
			setValidForm(true)
			setErrorMessage("")
		}
	}, [email, password, confirmPassword])

	useEffect(() => {
		const handleBackButton = () => {
			navigation.navigate("Init")
			return true
		}

		const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton)
		return () => backHandler.remove()
	}, []);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={() => {
				navigation.navigate("Init")
			}}>
				<Feather name="arrow-left" size={50} color="black" />
			</TouchableOpacity>
			<SpaceComponent h={50} />
			<Text style={styles.mainText}>{"Hola!"}</Text>
			<SpaceComponent h={10} />
			<Text style={styles.altText}>{"Aqui podras crear tu nueva cuenta"}</Text>
			<SpaceComponent h={50} />
			<InputComponent placeholder="Correo electronico" isPassword={false} state={email} setState={setEmail} style={styles.email} />
			<SpaceComponent h={30} />
			<InputComponent placeholder="Contraseña" isPassword={true} style={styles.password} setState={setPassword} state={password} />
			<SpaceComponent h={30} />
			<InputComponent placeholder="Confirmar contraseña" isPassword={true} style={styles.confirmPassword} setState={setConfirmPassword} state={confirmPassword} />
			<SpaceComponent h={40} />
			{validForm == true ? <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={onRegister}>
				<Text style={[styles.centerText, styles.buttonText, styles.textFont, styles.textWhite]}>{"Registrarse"}</Text>
			</TouchableOpacity> : null}
			<SpaceComponent h={15} />
			<Text style={styles.alignBottom}>
				<View>
					<Text>{"Ya tienes una cuenta? "}</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={styles.textBlue}>{"Inicia sesion aqui!"}</Text>
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
		paddingHorizontal: 24,
		width: "100%",
		height: 20,
	},
	errorMessage: {
		color: "red",
		fontSize: 14,
		fontWeight: "900"
	}
});

export default SignupScreen