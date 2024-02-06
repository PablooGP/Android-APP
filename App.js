import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

import { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Pressable, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Styles, Set } from "./src/styles/index.js"
import Topbar from "./src/components/Topbar.js"
import Bottombar from "./src/components/Bottombar.js"
import ListContainer from './src/components/ListContainer.js'

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const StatusBarHeight = StatusBar.currentHeight

export default function App() {

	const [dimensions, setDimensions] = useState({
		window: windowDimensions,
		screen: screenDimensions,
	});

	useEffect(() => {
		const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
			setDimensions({ window, screen })
		})
		return () => subscription?.remove();
	});

	console.log(dimensions.window.width, dimensions.window.height)

	return (
		<View style={[Styles.app]}>
			<Topbar />
			<View style={Styles.container}>
				<ListContainer></ListContainer>
			</View>
			
		</View>
	);
}