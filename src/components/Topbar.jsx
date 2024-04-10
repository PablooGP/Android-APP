import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { BlurView } from "expo-blur"

import React from 'react'

const Topbar = () => {
	return (
		<View style={{
			width: "100%",
			height: StatusBar.currentHeight,
			backgroundColor: 'rgba(243 126 44 / 0.95)'
		}}>
			
		</View>

	)
}

export default Topbar