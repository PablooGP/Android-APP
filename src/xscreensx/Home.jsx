import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair } from 'react-native'

import { Styles, Set } from '../styles'

import Topbar from '../components/Topbar.js'

const Home = ({ navigation }) => {
	return (
		<View style={[Styles.app]}>
			<View style={Styles.container}>
				<Text>{"Home Screen, nose que poner la verdad"}</Text>
			</View>
		</View>
	)
}

export default Home