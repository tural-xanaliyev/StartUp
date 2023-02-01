import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { firestore } from "../../fireStor";
import { apiSlice } from "./../api/apiSlice";
const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = userAdapter.getInitialState();

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      async queryFn() {
        return firestore.get("Users");
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      providesTags: (result, error, arg) => [{ type: "User", id: "LIST" }],
    }),
    addUser: builder.mutation({
      async queryFn(data) {
        const response = firestore.add("Users", data);
        return response;
      },
      transformResponse: (responseData) => {
        return userAdapter.addOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{ type: "User", id: "LIST" }],
    }),
    updateUser: builder.mutation({
      async queryFn(data) {
        const response = firestore.update("Users", data);
        return response;
      },
      transformResponse: (responseData) => {
        return userAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{ type: "User", id: "LIST" }],
    }),
    deleteUser: builder.mutation({
      async queryFn(id) {
        const response = firestore.delete("Users", id);
        return response;
      },
      transformResponse: (responseData) => {
        return userAdapter.removeOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userSlice;

export const selectUserResult = userSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
  selectUserResult,
  (result) => result.data
);

export const { selectAll: selectAllUsers, selectById: selectUsersById } =
  userAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);
