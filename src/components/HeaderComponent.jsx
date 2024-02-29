import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Searchbar from './Searchbar.jsx'

const Style = StyleSheet.create({
	container: {
		width: "100%",
		height: 350
	},
	mainText: {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 24,
		color: "black",
		fontWeight: "700",
		fontFamily: "NunitoSans",
		fontStyle: "italic"
	},
})

const HeaderComponent = ({ setKeyword }) => {
	return (
		<View style={Style.container}>
			<Text style={Style.mainText}>
				{"Todos los productos"}
			</Text>
			<Searchbar setKeyword={setKeyword}/>
		</View>
	)
}

export default HeaderComponent