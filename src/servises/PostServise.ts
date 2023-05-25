import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})