import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		value: {
			user: "userLogged",
			updatedAt: new Date().toLocaleString(),
			total: null,
			items: [],
		},
	},
	reducers: {
		addItem: (state, action) => {
			const productRepeated = state.value.items.find(
				(item) => item.id === action.payload.id
			);
			if (productRepeated) {
				const itemsUpdated = state.value.items.map((item) => {
					if (item.id === action.payload.id) {
						item.quantity += action.payload.quantity;
						return item;
					}
					return item;
				});
				const total = itemsUpdated.reduce(
					(acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
					0
				);
				state.value = {
					...state.value,
					items: itemsUpdated,
					total,
					updatedAt: new Date().toLocaleString(),
				};
			} else {
				state.value.items.push(action.payload);
				const total = state.value.items.reduce(
					(acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
					0
				);
				state.value = {
					...state.value,
					total,
					updatedAt: new Date().toLocaleString(),
				};
			}
		},
		removeItem: (state, action) => {
			state.value.items = state.value.items.filter(item => item.name !== action.payload.name);
			const total = state.value.items.reduce(
				(acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
				0
			);
			state.value = {
				...state.value,
				total,
				updatedAt: new Date().toLocaleString(),
			};
		},
		updateItemQuantity: (state, action) => {
			const { name, quantity } = action.payload;
			const productIndex = state.value.items.findIndex((item) => item.name === name);
			if (productIndex !== -1) {
				state.value.items[productIndex].quantity = quantity;
			}
			
			const total = state.value.items.reduce(
				(acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
				0
			);
			state.value = {
				...state.value,
				total,
				updatedAt: new Date().toLocaleString(),
			};
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;