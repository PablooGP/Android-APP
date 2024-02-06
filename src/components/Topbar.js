import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Dimensions, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';
import StylesConfiguration from '../StylesConfiguration.js';

const StatusBarHeight = StatusBar.currentHeight
const w = Dimensions.get('window').width // X
const h = Dimensions.get('window').height // Y

StatusBar.setBarStyle("light-content")

const Styles = StyleSheet.create({
	fullSize: {
		width: "100%",
		height: "100%",
	},
	container: {
		position: "relative",
		zIndex: 5,
		height: 62 + StatusBarHeight,
		backgroundColor: StylesConfiguration.MainColor
	},
	statusBar: {
		position: "relative",
		width: "100%",
		height: StatusBarHeight,
		backgroundColor: "rgba(0 0 0 / 0.25)",
		zIndex: 5,
		top: 0,
	},
	outsideStatusbar: {
		position: "relative",
		width: "100%",
		height: 62,
	},
	topbarButton: {
		position: "absolute",
		left: 12,
		marginTop: 10,
		marginBottom: 10,
		width: 42,
		height: 42,
		backgroundColor: "white",
		zIndex: 2,
	},
	topbarSearch: {
		position: "absolute",
		width: "65%",
		left: "17.5%",
		top: 13,
		height: 36,
		backgroundColor: "#fafafafa",
		borderRadius: 100,
	},
	centerTextVertical: {
		textAlign: "center",
	},
	searchbarInput: {
		fontSize: 18
	}
})

export default function Topbar() {
	return (
		<View style={Styles.container}>
			<View style={Styles.statusBar}></View>
			<View style={Styles.outsideStatusbar}>
				<TouchableOpacity title="TEST" style={Styles.topbarButton}></TouchableOpacity>
				<View style={Styles.topbarSearch}>
					<TextInput 
						style={[Styles.fullSize, Styles.centerTextVertical, Styles.searchbarInput]}
						placeholder="Search"
					/>
				</View>
			</View>

		</View>
	)
}
