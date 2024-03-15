import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Provider } from "react-redux"
import { Text, View, SafeAreaView, Pressable, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Styles, Set } from "./src/styles/index.js"
import Topbar from "./src/components/Topbar.jsx"
import Bottombar from "./src/components/Bottombar.js"

import fonts from './src/global/fonts.js';

import store from "./src/store/index.js"

// Import de Screens

import TabNavigator from './src/Navigation/TabNavigator.jsx'
import MainNavigator from './src/Navigation/MainNavigator.jsx';

export default function App() {

	const [fontsLoaded] = useFonts(fonts)
	const [cart, setCart] = useState({})

	if (!fontsLoaded) return null

	return (
		<Provider store={store}>
			<View style={{
				height: "100%",
				width: "100%",
				backgroundColor: "transparent",
			}}>
				<Topbar />
				<MainNavigator />
			</View>
		</Provider>



	);
}