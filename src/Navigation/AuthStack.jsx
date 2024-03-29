import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				header: ({route}) => <Header title="HOLA"/>
			}}
		>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
	)
}

export default AuthStack