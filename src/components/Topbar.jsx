import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { BlurView } from "expo-blur"

import React from 'react'

const Topbar = () => {
	return (
		<View style={{
			width: "100%",
			height: StatusBar.currentHeight,
			backgroundColor: 'rgba(0 0 0 / 0.25)'
		}}>
			<BlurView intensity={30} experimentalBlurMethod='dimezisBlurView' style={{
				...StyleSheet.absoluteFillObject,
				overflow: "hidden",
				backgroundColor: "transparent",
			}} />
		</View>

	)
}

export default Topbar