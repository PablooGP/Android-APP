import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import * as ImagePicker from "expo-image-picker"

import { setUser } from '../features/auth/authSlice'
import StylesConfiguration from '../global/StylesConfiguration'
import GlobalStyles from "../styles/Styles"
import SpaceComponent from '../components/SpaceComponent'
import ProfileButton from '../components/ProfileButton'

import { setCameraImage } from "../features/auth/authSlice"
import { usePostProfileImageMutation } from "../services/shopService"

import ImageModal from '../components/ImageModal'

import Images from '../global/images';

const ProfileStack = ({ navigation }) => {

	const [triggerSaveProfileImage, result] = usePostProfileImageMutation()

	const dispatch = useDispatch()

	const { user, localId } = useSelector((state) => state.authReducer.value)
	const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value)

	const [image, setImage] = useState(null);

	const Logout = () => {
		dispatch(setUser({}))
	}

	const verifyCameraPermissions = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			return false
		}
		return true
	}

	const pickImage = async () => {
		const isCameraOk = await verifyCameraPermissions()
		if (isCameraOk) {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [1, 1],
				base64: true,
				quality: 1,
			})

			if (!result.canceled) {
				setImage(result.assets[0].uri)
			}
		}
	}

	const confirmImage = () => {
		dispatch(setCameraImage(image))
		triggerSaveProfileImage({ localId, image })
		setImage(null)
	}

	const denyImage = () => {
		setImage(null)
	}

	return (
		<ScrollView contentContainerStyle={Styles.container}>
			<View style={Styles.bgTop} />

			<SpaceComponent h={25} />
			<View style={[Styles.userCard, GlobalStyles.shadow1]}>
				<SpaceComponent h={25} />
				<TouchableOpacity onPress={pickImage}>
					<Image source={(profileImage || imageCamera) ? {uri: profileImage || imageCamera} : Images.DefaultProfileImage } style={Styles.userImage} />
				</TouchableOpacity>

				<SpaceComponent h={10} />
				<Text style={[Styles.textStyle, Styles.textHigh]}>{"Nombre Usuario Completo"}</Text>
				<Text style={[Styles.textStyle, Styles.textLow]}>{user}</Text>
			</View>

			<SpaceComponent h={35} />
			<View style={{ width: "100%", paddingHorizontal: 40, gap: 25 }}>
				<ProfileButton text={"Editar perfil"}>
					<Feather name="edit" size={30} color="white" style={Styles.iconPos} />
				</ProfileButton>
				<ProfileButton text={"Ordenes de compra"}>
					<MaterialIcons name="payments" size={30} color="white" style={Styles.iconPos} />
				</ProfileButton>
				<ProfileButton text={"Cerrar sesion"} onPress={Logout}>
					<Entypo name="log-out" size={30} color="white" style={Styles.iconPos} />
				</ProfileButton>
			</View>
			{ image ? <ImageModal img={image} acceptcb={confirmImage} denycb={denyImage}/> : null}
		</ScrollView>
	)
}

const Styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: 'center',
		paddingVertical: 20,
	},
	textStyle: {
		textAlign: "center",
		fontFamily: "SignikaNegative",
	},
	textHigh: {
		fontSize: 18,
		fontWeight: "900"
	},
	textLow: {
		fontSize: 14,
	},
	userImage: {
		width: 140,
		height: 140,
		backgroundColor: "white",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 100,
		zIndex: 5
	},
	userCard: {
		alignItems: 'center',
		width: "80%",
		height: 240,
		backgroundColor: "white",
		borderRadius: 20,
	},
	bgTop: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: 200,
		backgroundColor: StylesConfiguration.MainColor
	},
	buttonIcon: {
		width: 54,
		height: 54,
		backgroundColor: StylesConfiguration.MainColor,
		borderRadius: 44,
	},
	iconPos: {
		left: 12,
		top: 12,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "900",
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
	}
})
export default ProfileStack