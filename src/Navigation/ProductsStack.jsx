import React, { useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair, FlatList, Image, StatusBar } from 'react-native'
import ProductsList from "../global/products.json"
import Styles from '../styles/Styles.js'

import { ProductItemHorizontal } from '../components/ProductItem.jsx'
import { NavigationContainer } from '@react-navigation/native'

import ProductsView from '../Screens/ProductsView.jsx'

const Stack = createNativeStackNavigator()

const Products = ({ navigation, route }) => {
	
	return (
		<Stack.Navigator
			initialRouteName="Init"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Init" component={ProductsView} />
		</Stack.Navigator>

	)
}

export default Products