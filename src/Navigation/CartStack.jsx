import React, { useState, useEffect, useContext } from "react";

import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Pressable, Modal } from "react-native";
import ModalView from "../components/Modal.jsx";
import ItemCounter from "../components/ItemCounter.jsx";
import { HorizontalProductItemStyle } from "../styles/Styles.js"

import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

import { ProductItemHorizontal } from "../components/ProductItem.jsx";
import SpaceComponent from "../components/SpaceComponent.jsx";

const CartArray = [
	{
		id: 1,
		image: "https://i.ibb.co/2WX7C73/asdjadu43563md.jpg",
		name: "Procesador AMD RYZEN 3 3200G 4.0GHz Turno + Radeon Vega 8 AM4 Wraith Stealth Cooler",
		description: "En este lugar deberia ir la descripcion del producto...",
		quantity: 5,
	},
	{
		id: 2,
		image: "https://i.ibb.co/2WX7C73/asdjadu43563md.jpg",
		name: "Este es otro producto [id=2]",
		description: "En este lugar deberia ir la descripcion del producto...",
		quantity: 1,
	},
	{
		id: 3,
		image: "https://i.ibb.co/2WX7C73/asdjadu43563md.jpg",
		name: "Otro producto [id=3]",
		description: "En este lugar deberia ir la descripcion del producto...",
		quantity: 2,
	},
	{
		id: 4,
		image: "https://i.ibb.co/2WX7C73/asdjadu43563md.jpg",
		name: "Tambien otro producto [id=4]",
		description: "En este lugar deberia ir la descripcion del producto...",
		quantity: 8,
	},
	{
		id: 5,
		image: "https://i.ibb.co/2WX7C73/asdjadu43563md.jpg",
		name: "Ultimo producto de la lista [id=5]",
		description: "En este lugar deberia ir la descripcion del producto...",
		quantity: 1,
	}
]

const CartContainer = ({ navigation }) => {

	const [cartArray, setCartArray] = useState(CartArray)
	const [modalVisible, setModalVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState({})

	const cartItems = useSelector((state) => state.cartReducer.value.items);
	const total = useSelector((state) => state.cartReducer.value.total);
	const [triggerPost, result] = usePostOrderMutation()

	const DeletePress = (properties) => {
		setItemSelected(properties)
		setModalVisible(true)
	}

	/*
	const ProductView = ({ properties }) => {
		return (
			<View style={[HorizontalProductItemStyle.container]}>
				<View style={[HorizontalProductItemStyle.containerView, HorizontalProductItemStyle.shadow]}>
					<Image style={[HorizontalProductItemStyle.image]} source={{ uri: properties.image }} />
					<Text style={[HorizontalProductItemStyle.text]}>{properties.name}</Text>
					<ItemCounter position={HorizontalProductItemStyle.counterPosition} quantity={properties.quantity} />
					<TouchableOpacity style={[HorizontalProductItemStyle.createButton]} onPress={() => DeletePress(properties)}>
						<Image style={[HorizontalProductItemStyle.deleteImage]} source={require("../Images/trash_icon.png")} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}*/
	return (
		<SafeAreaView>
			{
				cartItems.length > 0 ?
					(<FlatList
						data={cartItems}
						ListHeaderComponent={<SpaceComponent h={10}/>}
						ListFooterComponent={<SpaceComponent h={10}/>}
						renderItem={({ item }) => <ProductItemHorizontal properties={item} product={item} isCart={true}/>}
						keyExtractor={item => item.id || item.name}
					/>)
					:
					(
						<Text>{"No hay productos en el carrito!"}</Text>
					)
			}
			<ModalView setModalVisible={setModalVisible} modalVisible={modalVisible} itemSelected={itemSelected} setItemSelected={setItemSelected} cartArray={cartArray} setCartArray={setCartArray} />
		</SafeAreaView>
	)
}

export default CartContainer
export const CartStyle = HorizontalProductItemStyle