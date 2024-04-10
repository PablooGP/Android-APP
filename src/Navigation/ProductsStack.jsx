import { StyleSheet, View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from '../styles/Styles'
import { Image } from 'expo-image'

import ProductsList from "../global/products.json"
import { ProductItemHorizontal } from '../components/ProductItem'

import HeaderComponent from "../components/HeaderComponent.jsx"
import SearchHeader from '../components/SearchHeader.jsx'

import Images from '../global/images.js'
import SpaceComponent from '../components/SpaceComponent.jsx'

const ProductsStack = ({ navigation, route, products }) => {

	const { Category } = route || {}
	const [keyword, setKeyword] = useState([])

	const arr = typeof (products) == "Array" ? products : Object.values(products || [])

	return (
		<View style={Styles.stackBackground}>
			<SearchHeader setKeyword={setKeyword} />
			<FlatList
				data={arr}
				renderItem={({ item }) => <ProductItemHorizontal product={item} navigation={navigation} />}
				keyExtractor={item => item.id || item.name}
				ListFooterComponent={View}
				ListFooterComponentStyle={Styles.tabBarSpace}
				ListHeaderComponent={() => <SpaceComponent h={10} />}

				ItemSeparatorComponent={() => (
					<View style={Styles.listSeparator} />
				)}

			/>

		</View>
	)
}

const styles = StyleSheet.create({
	appLogo: {
		width: 60,
		height: 60,
		position: "absolute",
		top: 25,
		left: 25
	},
})

export default ProductsStack