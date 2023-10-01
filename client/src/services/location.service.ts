import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HOST } from '../utils/configs'

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST }),
  endpoints: (build) => ({
    getLocations: build.query({
      query: () => 'locations'
    })
  })
})

export const { useGetLocationsQuery } = locationApi
