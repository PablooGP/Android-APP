import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Provider } from "react-redux"
import { Text, View, SafeAreaView, Pressable, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Styles, Set } from "./src/styles/index.js"
import Topbar from "./src/components/Topbar.jsx"
import fonts from './src/global/fonts.js';
import store from "./src/store/index.js"
import { init } from "./src/db";

// Import de Screens

import MainNavigator from './src/navigation/MainNavigator.jsx';

init().then(() => {
	console.log("Database cargada")
}).catch(err => {
	console.log("La database no pudo cargar:")
	console.log(err)
})

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