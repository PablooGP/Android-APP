import React, { useState, useEffect, useContext } from "react";

import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Pressable, Modal } from "react-native";
import ItemCounter from "../components/ItemCounter.jsx"
import ModalView from "../components/Modal.jsx"

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

const Styles = StyleSheet.create({
	fullSize: {
		width: "100%",
		height: "100%"
	},
	container: {
		width: "100%",
		height: 100,
		paddingHorizontal: 6,
		paddingVertical: 6,
	},
	containerView: {
		height: "100%",
		width: "100%",
		backgroundColor: "white",
		borderRadius: 8,
		overflow: "hidden"
	},
	image: {
		position: "absolute",
		backgroundColor: "#f0f2f0",
		aspectRatio: 1,
		height: "100%",
		left: 0,
		top: 0
	},
	counterPosition: {
		left: 95,
		bottom: 5
	},
	text: {
		position: "absolute",
		left: 95,
		width: "100%",
		paddingRight: 100,
		fontSize: 12,
		backgroundColor: "transparent",
		fontFamily: "NotoSans",
		fontWeight: 600
	},
	shadow: {
		borderColor: "black",
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.22,
		shadowRadius: 9.22,
		elevation: 6
	},
	createButton: {
		position: "absolute",
		width: 26,
		height: 26,
		backgroundColor: "red",
		borderRadius: 8,
		right: 5,
		bottom: 5
	},
	deleteImage: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		alignSelf: "center",

		top: "15%",
		width: "45%",
		height: "65%"
	},
	centerText: {
		textAlign: "center",
		verticalAlign: "middle",
		color: "white",
		fontWeight: "bold"
	}
})

const CartContainer = ({ navigation }) => {

	const [cartArray, setCartArray] = useState(CartArray)
	const [modalVisible, setModalVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState({})

	const DeletePress = (properties) => {
		setItemSelected(properties)
		setModalVisible(true)
	}

	const ProductView = ({ properties }) => {
		return (
			<View style={[Styles.container]}>
				<View style={[Styles.containerView, Styles.shadow]}>
					<Image style={[Styles.image]} source={{ uri: properties.image }} />
					<Text style={[Styles.text]}>{properties.name}</Text>
					<ItemCounter position={Styles.counterPosition} quantity={properties.quantity} />
					<TouchableOpacity style={[Styles.createButton]} onPress={() => DeletePress(properties)}>
						<Image style={[Styles.deleteImage]} source={require("../Images/trash_icon.png")} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	

	return (
		<SafeAreaView>
			{
				cartArray.length > 0 ?
					(<FlatList
						data={cartArray}
						renderItem={({ item }) => <ProductView properties={item} />}
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
export const CartStyle = Styles