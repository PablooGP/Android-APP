import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { BackgroundColor, PrimaryColor, SecondaryColor, } from './ColorDesign';

const Styles = StyleSheet.create({
	tabBar: {

		borderColor: "transparent",
		position: "absolute",
		bottom: 0,
		height: 64,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,

	},
	stackBackground: {
		backgroundColor: BackgroundColor
	},
	tabBarSpace: {
		width: "100%",
		height: 68,
	},
	listSeparator: {
		width: "100%",
		height: 8
	},
	shadow1: {
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.20,
		shadowRadius: 5.62,
		elevation: 7
	},
	lowShadow: {
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.16,
		shadowRadius: 1.51,
		elevation: 2
	}
})

const HorizontalProductItemStyle = StyleSheet.create({
	fullSize: {
		width: "100%",
		height: "100%"
	},
	container: {
		width: "100%",
		height: 100,
		paddingHorizontal: 8,


	},
	containerView: {
		height: "100%",
		margin: "auto",
		width: "100%",
		backgroundColor: PrimaryColor,
		borderRadius: 16,
		overflow: "hidden"
	},
	image: {
		position: "absolute",
		backgroundColor: "transparent",
		aspectRatio: 1,
		height: "100%",
		left: 0,
		top: 0
	},
	counterPosition: {
		left: 95,
		bottom: 5
	},
	productName: {
		position: "absolute",
		left: 105,
		width: "100%",
		paddingRight: 110,
		color: "black",
		fontSize: 14,
		fontWeight: 600,
		backgroundColor: "transparent",
	},
	productPrice: {
		position: "absolute",
		bottom: 5,
		left: 105,
		fontSize: 16
	},
	textFont: {
		color: "black",
		fontFamily: "NunitoSans",
		fontWeight: 700,
		fontStyle: "italic"
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

export default Styles
export { HorizontalProductItemStyle }