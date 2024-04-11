import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { useDispatch } from "react-redux";
import { removeItem } from "../features/shop/cartSlice";

const Styles = StyleSheet.create({
	modal: {
		position: "absolute",
		left: 0,
		top: 0,
	},
	modalContainer: {
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		alignItems: "center",
		gap: 2,
	},
	modalCancelButton: {
		position: "relative",
		display: "flex",
		backgroundColor: "black",
		width: "100%",
		height: 40
	},
	modalDeleteButton: {
		position: "relative",
		display: "flex",
		backgroundColor: "red",
		width: "100%",
		height: 40
	},
	centerText: {
		textAlign: "center",
		verticalAlign: "middle",
		color: "white",
		fontWeight: "bold"
	},
	fullSize: {
		width: "100%",
		height: "100%"
	}
})

const ModalView = ({itemSelected, modalVisible, setModalVisible, setItemSelected}) => {

	const dispatch = useDispatch()

	const CancelFunction = () => {
		setItemSelected({})
		setModalVisible(false)
	}

	const DeleteItemFunction = () => {
		dispatch(removeItem(itemSelected))
		setItemSelected({})
		setModalVisible(false)
	}

	return (
		<Modal visible={modalVisible} style={[Styles.modal]} animationType="fade" presentationStyle="overFullScreen">
			<View style={[Styles.modalContainer]}>
				<Text>{`Estas seguro que quieres borrar el siguiente producto de tu carrito?\n`}</Text>
				<Text>{`${itemSelected.name}\n\nCantidad: ${itemSelected.quantity}\n`}</Text>
				<TouchableOpacity onPress={CancelFunction} style={[Styles.modalCancelButton]}>
					<Text style={[Styles.fullSize, Styles.centerText]}>{"Cancelar"}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={DeleteItemFunction} style={[Styles.modalDeleteButton]}>
					<Text style={[Styles.fullSize, Styles.centerText]}>{"Borrar"}</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	)
}

export default ModalView