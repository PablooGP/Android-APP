import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"

import SpaceComponent from "./SpaceComponent"

const ImageModal = ({ visibility, img, acceptcb, denycb }) => {

	return (
		<Modal visible={visibility || true} style={[Styles.modal]} animationType="fade" presentationStyle="overFullScreen">
			<View style={Styles.container}>
				<SpaceComponent h={55} />
				<Image style={Styles.image} source={{ uri: img }} />
				<SpaceComponent h={15} />
				<Text style={[Styles.textMid, Styles.textStyle]}>{"Te gustaria usar esta imagen como foto de perfil?"}</Text>
				<SpaceComponent h={25} />
				<TouchableOpacity style={[Styles.button, Styles.greenbg]} onPress={acceptcb}>
					<Text style={[Styles.textMid, Styles.textStyle, Styles.buttonText]}>{"Aceptar"}</Text>
				</TouchableOpacity>
				<SpaceComponent h={15} />
				<TouchableOpacity style={[Styles.button, Styles.redbg]} onPress={denycb}>
					<Text style={[Styles.textMid, Styles.textStyle, Styles.buttonText]}>{"Rechazar"}</Text>
				</TouchableOpacity>
			</View>

		</Modal>
	)
}

const Styles = StyleSheet.create({
	textStyle: {
		fontFamily: "SignikaNegative",
		fontWeight: "900",
	},
	textMid: {
		textAlign: "center",
	},
	container: {
		paddingHorizontal: 40,
		width: "100%",
		height: "100%",
		alignItems: 'center',
	},
	modal: {
		position: "absolute",
		backgroundColor: "rgba(0 0 0 / 0.5)",
		left: 0,
		top: 0,
	},
	image: {
		width: 300,
		height: 300,
	},
	button: {
		width: "65%",
		height: 34,
		borderRadius: 30,
	},
	buttonText: {
		alignItems: "center",
		textAlignVertical: "center",
		fontSize: 14,
		width: "100%",
		height: "100%",
		color: "white",
	},
	greenbg: {
		backgroundColor: "#12c94f",
	},
	redbg: {
		backgroundColor: "#c7291e"
	}
})

export default ImageModal