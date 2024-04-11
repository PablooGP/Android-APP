import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo, AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { BlurView } from "expo-blur"
import { useDispatch, useSelector } from "react-redux";

import ItemListCategory from '../components/ItemListCategory.jsx';

import ProductsStack from "./ProductsStack.jsx"
import CategoryStack from "./CategoryStack.jsx"
import CartStack from "./CartStack.jsx"
import ProfileStack from "./ProfileStack.jsx"

import Styles from '../styles/Styles.js'
import StylesConfiguration from '../global/StylesConfiguration.js';

const TabNavigator = () => {
	const Tab = createBottomTabNavigator()

	const dispatch = useDispatch()
	const items = useSelector((state)=> state.cartReducer.value.items);
	const quantity = items.reduce((a, b) => a + b.quantity, 0)

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
							<View style={[stylee.cartCounterHolder, {backgroundColor: focused ? StylesConfiguration.MainColor : "grey"}]}>
								<Text style={[stylee.cartCounter, {color: "white"}]}>{quantity}</Text>
							</View>
							
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
	cartCounterHolder: {
		position: "absolute",
		left: 25,
		top: -6,
		zIndex: 2,
		backgroundColor: "grey",
		width: 18,
		height: 18,
		borderRadius: 20,
	},
	cartCounter: {
		width: "100%",
		height: "100%",
		fontFamily: "SignikaNegative",
		textAlign: "center",
		textAlignVertical: "center",
		
		fontSize: 12,
		fontWeight: "900",
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