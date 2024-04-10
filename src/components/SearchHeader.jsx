import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'

import Images from '../global/images'
import Searchbar from './Searchbar'

const SearchHeader = ({ setKeyword, placerholder }) => {
	return (
		<View style={styles.header}>
			<TouchableOpacity>
				<Image style={styles.appLogo} source={Images.AppLogoWhite} />
			</TouchableOpacity>
			<Searchbar setKeyword={setKeyword} style={styles.searchStyle} placerholder={placerholder} />
		</View>
	)
}

const styles = StyleSheet.create({
	searchStyle: {
		position: "absolute",
		left: 70,
		width: "70%",
		height: 34
	},
	header: {
		width: "100%",
		height: 56,
		backgroundColor: "#F37E2C"
	},
	appLogo: {
		width: 46,
		height: 46,
		position: "absolute",
		top: 5,
		left: 10
	},
})


export default SearchHeader