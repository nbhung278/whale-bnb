import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { JSON_HOST } from '../utils/configs'

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl: JSON_HOST }),
  endpoints: (build) => ({
    getLocations: build.query({
      query: () => 'locations'
    })
  })
})

export const { useGetLocationsQuery } = locationApi
