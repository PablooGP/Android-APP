import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { addItem } from "../features/shop/cartSlice";
import SpaceComponent from './SpaceComponent'
import AddToCart from './AddToCart'
import ItemCounter from './ItemCounter'

const ProductView = ({ item }) => {

	const [counter, setCounter] = useState(1)

	const dispatch = useDispatch()

	const onAddToCart = () => {
		dispatch(addItem({...item, quantity: counter}))
		console.log("add to cart", counter)
	}

	return (
		<ScrollView>
			<View style={Styles.container}>
				<SpaceComponent h={30} />
				<Text style={Styles.productName}>{item.name}</Text>
				<SpaceComponent h={15} />
				<Image style={Styles.image} source={{ uri: item.image }} />
				<SpaceComponent h={15} />
				<View style={[Styles.horizontalAlign, Styles.interact]}>
					<ItemCounter position={Styles.counterStyle} buttonSize={Styles.buttonSize} fontSize={18} set={setCounter} quantity={counter}/>
					<AddToCart onPress={onAddToCart} />
				</View>
				<SpaceComponent h={30} />
				<Text style={Styles.descriptionTitle}>{"Descripcion del producto:"}</Text>
				<SpaceComponent h={10} />
				<Text style={Styles.description}>{item.description}</Text>
			</View>
			<SpaceComponent h={24} />
		</ScrollView>

	)
}

const Styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 20,
	},

	interact: {
		width: "100%",
	},

	horizontalAlign: {
		gap: 15,
		justifyContent: "space-evenly",
		flexDirection: "row"
	},

	counterStyle: {
		position: "relative",
		height: 40,
		width: 100,
	},

	buttonSize: {
		width: 37,
		height: 37
	},

	productName: {
		fontFamily: "SignikaNegative",
		fontWeight: "900",
		fontSize: 24,
	},
	image: {

		width: "100%",
		aspectRatio: 1
	},
	descriptionTitle: {
		fontFamily: "SignikaNegative",
		fontSize: 22,
		fontWeight: "900",
		width: "100%",
	},
	description: {
		fontFamily: "SignikaNegative",
		fontSize: 16,
		width: "100%",
	}
})

export default ProductView