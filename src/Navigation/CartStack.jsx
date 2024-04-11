import React, { useState, useEffect, useContext } from "react";

import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Pressable, Modal } from "react-native";
import ModalView from "../components/Modal.jsx";
import ItemCounter from "../components/ItemCounter.jsx";
import { HorizontalProductItemStyle } from "../styles/Styles.js"

import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

import { ProductItemHorizontal } from "../components/ProductItem.jsx";
import SpaceComponent from "../components/SpaceComponent.jsx";

const CartContainer = ({ navigation }) => {

	const [modalVisible, setModalVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState({})

	const cartItems = useSelector((state) => state.cartReducer.value.items);
	const total = useSelector((state) => state.cartReducer.value.total);
	const [triggerPost, result] = usePostOrderMutation()

	const DeletePress = (properties) => {
		setItemSelected(properties)
		setModalVisible(true)
	}

	const confirmCart = ()=> {
		console.log("trigger post")
		triggerPost({ total, cartItems, user: "loggedUser"})
	}
	
	const CartFooter = () => {
		return (
			<View>
				<SpaceComponent h={10} />
				<TouchableOpacity style={Styles.buyButton} onPress={confirmCart}>
					<Text>{"Comprar"}</Text>
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
	buyButton: {
		backgroundColor: "#30c758"
	}
})

export default CartContainer
export const CartStyle = HorizontalProductItemStyle