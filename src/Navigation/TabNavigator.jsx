import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo, AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { BlurView } from "expo-blur"

import ProductsStack from "./ProductsStack.jsx"
import CategoryStack from "./CategoryStack.jsx"
import CartStack from "./CartStack.jsx"
import ProfileStack from "./ProfileStack.jsx"

import Styles from '../styles/Styles.js'

const TabNavigator = () => {
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			initialRouteName="ProductsTab"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: Styles.tabBar,
				tabBarBackground: () => (<BlurView intensity={30} experimentalBlurMethod='dimezisBlurView' style={{
					...StyleSheet.absoluteFillObject,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					overflow: "hidden",
					backgroundColor: "transparent"
				}} />)

			}}
		>
			<Tab.Screen
				name="ProductsTab"
				component={ProductsStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<FontAwesome name="home" size={30} color={focused ? "black" : "grey"} />
						</View>
					)
				}}
			/>
			<Tab.Screen
				name="CategoryTab"
				component={CategoryStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<FontAwesome5 name="bars" size={30} color={focused ? "black" : "grey"} />
						</View>
					)
				}}
			/>

			<Tab.Screen
				name="CartTab"
				component={CartStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ zIndex: 5 }}>
							<FontAwesome5 name="shopping-cart" size={30} color={focused ? "black" : "grey"} />
						</View>
					)
				}}
			/>

			<Tab.Screen
				name="ProfileTab"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ zIndex: 5 }}>
							<FontAwesome  name="user" size={30} color={focused ? "black" : "grey"} />
						</View>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabNavigator