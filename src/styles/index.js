import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import StylesConfig from "../global/StylesConfiguration.js"

const StatusBarHeight = StatusBar.currentHeight

const Styles = StyleSheet.create({
	fullSize: {
		width: "100%",
		height: "200%"
	},
	statusBar: {
		backgroundColor: StylesConfig.MainColor,
	},
	app: {
		flex: 1,
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "green"
	},
	container: {
		backgroundColor: "white",
		width: "100%",
		height: "100%"
	},
	topbar: {
		backgroundColor: "#990000",
		width: "100%",
		height: 62+StatusBarHeight,
		zIndex: 2,
	},
	centerText: {
		display: "absolute",
		alignContent: 'center',
		width: "100%",
		height: "100%",
	}
})

const Set = StyleSheet.create({
	whiteText: {
		color: "white",
	},
	mediumText: {
		flex: 1,
		fontSize: 32,
		zIndex: 25,
		textAlign: 'center'
	}
})

export { Styles, Set }