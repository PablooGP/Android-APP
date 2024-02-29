import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from '../styles/Styles'

import ProductsList from "../global/products.json"
import { ProductItemHorizontal } from '../components/ProductItem'

import HeaderComponent from "../components/HeaderComponent.jsx"

const ProductsView = ({ navigation, route }) => {

	const { Category } = route || {}
	const [products, setProducts] = useState([])
	const [keyword, setKeyword] = useState([])

	useEffect(() => {
		let prods = ProductsList.Products
		if (Category != null || Category != undefined) { // Filtrando por categoria primero.
			prods = ProductsList.Products.filter((e =>
				e.Categories.includes(Category)
			))
		}

		const split = keyword

		setProducts(prods)
	}, [keyword])

	return (
		<View style={Styles.stackBackground}>
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductItemHorizontal product={item} navigation={navigation} />}
				keyExtractor={item => item.id || item.name}
				ListFooterComponent={View}
				ListFooterComponentStyle={Styles.tabBarSpace}
				ListHeaderComponent={() => <HeaderComponent setKeyword={setKeyword}/>}
				stickyHeaderIndices={[0]}
				ItemSeparatorComponent={() => (
					<View style={Styles.listSeparator} />
				)}

			/>

		</View>
	)
}

export default ProductsView