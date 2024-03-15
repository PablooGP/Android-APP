import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shopReducer from '../features/shop/shopSlice'
import { shopApi } from "../services/ShopService";
import { authApi } from "../services/AuthService.js";

export default configureStore({
	reducer: {
		counterReducer,
		shopReducer,
		[shopApi.reducerPath]: shopApi.reducer,
		[authApi.reducerPath]: authApi.reducer
	},
});