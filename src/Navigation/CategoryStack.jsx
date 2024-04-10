import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, Pressable, Text, TouchableOpacity, Hair, FlatList, BackHandler } from 'react-native'
import ExtraData from "../global/extra.json"

import { useSelector } from "react-redux"
import { useGetCategoriesQuery } from "../services/shopService"
import CategoryItem from '../components/CategoryItem'
import ItemListCategory from '../components/ItemListCategory'

import SearchHeader from '../components/SearchHeader'

import StylesConfiguration from '../global/StylesConfiguration'

import { BackgroundColor } from '../styles/ColorDesign'

const Style = StyleSheet.create({

})

const Category = ({ navigation, route }) => {

	const [keyword, setKeyword] = useState("")

	const { data, isLoading, error } = useGetCategoriesQuery();

	const renderCategory = (categoryType) => {
		navigation.navigate("Products", { Category: categoryType })
	}

	useEffect(() => {
		const handleBackButton = () => {
			if (route.params && route.params.item) {
				navigation.navigate("ProductsTab", { category: route.params.item.category })
			} else {
				navigation.navigate("ProductsTab")
			}
			return true
		}

		const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton)
		return () => backHandler.remove()
	}, []);

	if (route.params && route.params.category) {
		// Renderizar productos de cierta categoria
		return (
			<ItemListCategory/>
		)
	} else if (route.params && route.params.item) {
		// Renderizar el producto completo
	} else {
		return (
			<View style={styles.container}>
				<SearchHeader setKeyword={setKeyword} placerholder="Buscar en todas las categorias" />
				<Text style={styles.topLabel}>{"Categorias:"}</Text>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<CategoryItem navigation={navigation} data={item} />
					)}
					keyExtractor={(category) => category.name}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: BackgroundColor,
		gap: 5,
		width: "100%",
		height: "100%",
	},
	topLabel: {
		width: "100%",
		height: 34,
		textAlign: "center",
		textAlignVertical: "center",
		backgroundColor: StylesConfiguration.MainColor,
		fontFamily: "SignikaNegative",
		fontSize: 18,
		fontWeight: "900",
		color: "white"
	}
})


export default Category