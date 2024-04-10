import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo, AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { BlurView } from "expo-blur"

import ItemListCategory from '../components/ItemListCategory.jsx';

import ProductsStack from "./ProductsStack.jsx"
import CategoryStack from "./CategoryStack.jsx"
import CartStack from "./CartStack.jsx"
import ProfileStack from "./ProfileStack.jsx"

import Styles from '../styles/Styles.js'
import StylesConfiguration from '../global/StylesConfiguration.js';

const TabNavigator = () => {
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			initialRouteName="ProductsTab"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: Styles.tabBar,


			}}
		>
			<Tab.Screen
				name="ProductsTab"
				component={CategoryStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={stylee.tabContainer}>
							<FontAwesome name="home" size={30} color={focused ? StylesConfiguration.MainColor : "grey"} />
							<Text style={[stylee.tabText, (focused ? stylee.tabActive : stylee.tabInactive)]}>{"Inicio"}</Text>
						</View>
					)
				}}
			/>



			<Tab.Screen
				name="CartTab"
				component={CartStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={stylee.tabContainer}>
							<FontAwesome5 name="shopping-cart" size={30} color={focused ? StylesConfiguration.MainColor : "grey"} />
							<Text style={[stylee.tabText, (focused ? stylee.tabActive : stylee.tabInactive)]}>{"Carrito"}</Text>
						</View>
					)
				}}
			/>

			<Tab.Screen
				name="ProfileTab"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={stylee.tabContainer}>
							<FontAwesome name="user" size={30} color={focused ? StylesConfiguration.MainColor : "grey"} />
							<Text style={[stylee.tabText, (focused ? stylee.tabActive : stylee.tabInactive)]}>{"Cuenta"}</Text>
						</View>
					)
				}}
			/>

			<Tab.Screen
				name="ItemListCategory"
				component={ItemListCategory}
				options={{
					tabBarItemStyle: {
						display: "none"
					}
				}}
			/>
		</Tab.Navigator>
	)
}


const stylee = StyleSheet.create({
	tabContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		top: -4
	},
	tabText: {
		position: "absolute",
		fontSize: 11,
		width: 100,
		top: 32,
		textAlign: "center",
		textAlignVertical: "center",

	},
	tabActive: {
		color: StylesConfiguration.MainColor,
		fontWeight: "900"
	},
	tabInactive: {
		color: "grey",

	}
})
export default TabNavigator