import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair } from 'react-native'

import Home from "./Home.jsx"
import CartContainer from "./Cart.jsx"
import Products from "./Products.jsx"

const Style = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%"
	}
})
const Screens = {
	home: ({ setScreenSelected }) => {
		return <Home setScreenSelected={setScreenSelected} />
	},
	cart: ({ setScreenSelected }) => {
		return <CartContainer setScreenSelected={setScreenSelected} />
	},
	products: ({ setScreenSelected }) => {
		return <Products setScreenSelected={setScreenSelected} />
	},

}

const ScreenManager = ({ selected, setScreenSelected }) => {
	const Screen = Screens[selected.screenName]
	return (
		<View style={[Style.container]}>
			{
				Screen ?
					<Screen setScreenSelected={setScreenSelected} /> : null
			}
		</View>
	)
}

export default ScreenManager