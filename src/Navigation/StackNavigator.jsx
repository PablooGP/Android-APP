import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from "react-native"

import Home from '../screens/Home.jsx'
import Category from '../screens/Categories.jsx'
import Products from '../screens/Products.jsx'
import CartContainer from '../screens/Cart.jsx'

import Topbar from '../components/Topbar.js'

import { Styles, Set } from '../styles/index.js'

const Stack = createNativeStackNavigator()

const Navigator = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{header: Topbar}}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Categories" component={Category} />
					<Stack.Screen name="Products" component={Products} />
					<Stack.Screen name="Cart" component={CartContainer} />
				</Stack.Navigator>
			</NavigationContainer>
		</>

	)
}

export default Navigator