import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { api_key, base_auth_url } from "../firebase/Auth.js";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
	endpoints: (builder) => ({
		signUp: builder.mutation({
			query: ({...auth}) => ({
				url: `accounts:signUp?key=${api_key}`,
				method: "POST",
				body: auth
			})
		}),
		login: builder.mutation({
			query: ({...auth}) => ({
				url: `accounts:signInWithPassword?key=${api_key}`,
				method: "POST",
				body: auth
			})
		})
	})
})

export const { useLoginMutation, useSignUpMutation } = authApi