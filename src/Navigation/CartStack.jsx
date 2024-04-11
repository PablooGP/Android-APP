import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Pressable, Modal } from "react-native";
import ModalView from "../components/Modal.jsx";
import ItemCounter from "../components/ItemCounter.jsx";
import { HorizontalProductItemStyle } from "../styles/Styles.js"

import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

import { ProductItemHorizontal } from "../components/ProductItem.jsx";
import SpaceComponent from "../components/SpaceComponent.jsx";
import { clearCart } from "../features/shop/cartSlice.js";

const CartContainer = ({ navigation }) => {

	const [modalVisible, setModalVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState({})

	const cartItems = useSelector((state) => state.cartReducer.value.items);
	const total = useSelector((state) => state.cartReducer.value.total);
	const [triggerPost, result] = usePostOrderMutation()

	const dispatch = useDispatch()

	const DeletePress = (properties) => {
		setItemSelected(properties)
		setModalVisible(true)
	}

	const confirmCart = ()=> {
		console.log("trigger post")
		triggerPost({ total, cartItems, user: "loggedUser"})
		dispatch(clearCart())
	}
	
	const CartFooter = () => {
		return (
			<View style={Styles.footerContainer}>
				<SpaceComponent h={10} />
				<TouchableOpacity style={Styles.buyButton} onPress={confirmCart}>
					<Text style={Styles.buttonText}>{"Finalizar compra"}</Text>
				</TouchableOpacity>
			</View>

		)
	}

	const RenderCart = () => {
		return (
			<View>
				{
					cartItems.length > 0 ?
						(<FlatList
							data={cartItems}
							ListHeaderComponent={<SpaceComponent h={10} />}
							ListFooterComponent={<CartFooter />}
							ItemSeparatorComponent={<SpaceComponent h={10} />}
							renderItem={({ item }) => <ProductItemHorizontal properties={item} product={item} isCart={true} requestDelete={DeletePress} />}
							keyExtractor={item => item.id || item.name}
						/>)
						:
						(
							<Text>{"No hay productos en el carrito!"}</Text>
						)
				}
				<ModalView setModalVisible={setModalVisible} modalVisible={modalVisible} itemSelected={itemSelected} setItemSelected={setItemSelected} />
			</View>
		)
	}
	return <RenderCart />
}

const Styles = StyleSheet.create({
	footerContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%"
	},
	buyButton: {
		width: 200,
		height: 40,
		borderRadius: 12,
		backgroundColor: "#30c758"
	},
	buttonText: {
		width: "100%",
		height: "100%",
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 18,
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		color: "white",
	}
})

export default CartContainer
export const CartStyle = HorizontalProductItemStyle