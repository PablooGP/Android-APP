import { createSlice } from "@reduxjs/toolkit"
import allProducts from "../../global/products.json"
import allCategories from "../../global/extra.json"

export const shopSlice = createSlice({
	name: "shop",
	initialState: {
		value: {
			products: allProducts.Products,
			categories: allCategories.Categories,
			categorySelected: "",
			productIdSelected: null,
			productsFilteredByCategory: [],
		},
	},
	reducers: {
		setCategorySelected: (state, action) => {
			const categorySelected = action.payload;
			const productsFiltered = allProducts.Products.filter((product) => product.category === categorySelected)
			state.value.categorySelected = categorySelected
			state.value.productsFilteredByCategory = productsFiltered
		},
		setProductIdSelected: (state, action) => {
			state.value.productIdSelected = action.payload;
		},
	},
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;
export default shopSlice.reducer