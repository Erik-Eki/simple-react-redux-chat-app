import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the type of the user object
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

// Define the base URL of the backend service
const BASE_URL = 'http://localhost:5173/api';

// Create an API slice using RTK Query
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        responseHandler: (response) => response.text(),
    }),
    endpoints: (builder) => ({
        // Define an endpoint for getting all users
        getUsers: builder.query<User[], void>({
            query: () => '/users',
        }),
        // Define an endpoint for getting a user by id
        getUser: builder.query<User, number>({
            query: (id) => `/users/${id}`,
        }),
        // Define an endpoint for creating a new user
        createUser: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body,
            }),
        }),
        // Define an endpoint for updating a user by id
        updateUser: builder.mutation<User, { id: number; changes: Partial<User> }>({
            query: ({ id, changes }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: changes,
            }),
        }),
        // Define an endpoint for deleting a user by id
        deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

// Export the generated hooks from the API slice
export const {
    useGetUsersQuery,
    useGetUserQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;
