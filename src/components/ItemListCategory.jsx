import { View, Text } from 'react-native'
import React from 'react'

import { useSelector } from "react-redux"
import { useGetProductsByCategoryQuery, useGetProductsQuery } from "../services/shopService"

import ProductsStack from '../navigation/ProductsStack'

const ItemListCategory = ({ navigation }) => {

	const category = useSelector((state)=> state.shopReducer.value.categorySelected);
	
	if (category == "all") {
		const { data: allProducts, isLoading, error} = useGetProductsQuery()
		return (
			<ProductsStack navigation={navigation} products={allProducts || []} />
		)
	} else {
		const { data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)
		return (
			<ProductsStack navigation={navigation} products={productsFilteredByCategory || []} />
		)
	}
	
}

export default ItemListCategory