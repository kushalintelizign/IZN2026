import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes: ["Users"],  // ✅ define tag
    endpoints: (builder)=>({
        getUser: builder.query({
            query : () => 'users',
            providesTags: ["Users"],   // ✅ cache tag
        }),
        addUser: builder.mutation({
            query : (newUser) => ({
                url: 'users',
                method: 'POST',
                body: newUser
            }),
             invalidatesTags: ["Users"], // ✅ triggers refetch
        })
    })
})

export const {useGetUserQuery, useAddUserMutation} = apiSlice;