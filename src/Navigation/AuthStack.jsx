import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InitScreen from "../screens/InitScreen.jsx"
import LoginScreen from "../screens/LoginScreen.jsx"
import SignupScreen from "../screens/SignupScreen.jsx"

import HeaderComponent from "../components/HeaderComponent"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="Init" screenOptions={{ header: () => <></> }}>
			<Stack.Screen name="Init" component={InitScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
	)
}

export default AuthStack