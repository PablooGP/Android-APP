import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Text, View, SafeAreaView, Pressable, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import { Styles, Set } from "./src/styles/index.js"
import Topbar from "./src/components/Topbar.js"
import Bottombar from "./src/components/Bottombar.js"

import fonts from './src/global/fonts.js';


// Import de Screens

import ScreenManager from './src/screens/ScreenManager.jsx'
import CartContainer from './src/screens/Cart.jsx'
import Navigator from './src/Navigation/Navigator.js'

const StatusBarHeight = StatusBar.currentHeight

export default function App() {

	const [fontsLoaded] = useFonts(fonts)
	const [cart, setCart] = useState({})

	if (!fontsLoaded) return null

	return (
		<Navigator/>
	);
}