import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack.jsx"
import TabNavigator from "./TabNavigator.jsx"
import { fetchSession } from "../db";
import { setProfileImage, setUserLocation, setUser } from "../features/auth/authSlice";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";

const MainNavigator = () => {
	const { user, localId } = useSelector((state) => state.authReducer.value)
	const { data } = useGetProfileImageQuery(localId)
	const { data: location } = useGetUserLocationQuery(localId)

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const session = await fetchSession();
				if (session?.rows.length) {
					const user = session.rows._array[0];
					dispatch(setUser(user));
				}
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, []);

	useEffect(() => {
		if (data) {
			dispatch(setProfileImage(data.image));
		}
		if (location) {
			dispatch(setUserLocation(location));
		}
	}, [data, location]);
	
	return (
		<NavigationContainer>
			{user ? <TabNavigator /> : <AuthStack />}
		</NavigationContainer>
	)
}

export default MainNavigator
