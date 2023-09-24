import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HOST } from '../utils/configs'

export const userApi = createApi({
  reducerPath: 'userApi', // Tệp field trong Redux state,
  baseQuery: fetchBaseQuery({ baseUrl: HOST }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      // query: () => 'auth/login' // method ko có argument
      // method   có argument
      query: (body) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body
        }
      }
    }),
    signupUser: build.mutation({
      query: (body) => {
        return {
          url: 'auth/signup',
          method: 'POST',
          body
        }
      }
    }),
    uploadAvatar: build.mutation({
      query: (body) => {
        return {
          url: 'user/uploadAvatar',
          method: 'POST',
          body
        }
      }
    })
  })
})

export const { useLoginUserMutation, useSignupUserMutation, useUploadAvatarMutation } = userApi
