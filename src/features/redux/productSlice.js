import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const productAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = productAdapter.getInitialState();

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      transformResponse: (responsData) => {
        return productAdapter.setAll(initialState, responsData);
      },
      transformErrorResponse: (responsData) => {
        console.log(responsData);
      },
      providesTags: (result, error, arg) => [{ type: "Product", id: "LIST" }],
    }),
    AddProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      transformResponse: (responsData) => {
        return productAdapter.addOne(initialState, responsData);
      },
      transformErrorResponse: (responsData) => {
        console.log(responsData);
      },
      invalidatesTags: (result, error, todo) => [
        { type: "Product", id: "LIST" },
      ],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      transformResponse: (responseData) => {
        return productAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [
        { type: "Product", id: "LIST" },
      ],
    }),
    deleteProduct: builder.mutation({
        query: (product) => ({
          url: `/products/${product.id}`,
          method: "DELETE",
          body: product,
        }),
        transformResponse: (responseData) => {
          return productAdapter.removeOne(initialState, responseData);
        },
        transformErrorResponse: (responseData) => {
          console.log(responseData);
        },
        invalidatesTags: (result, error, todo) => [{type: 'Product', id: 'LIST'}]
      }),
  }),
});


export const {
    useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productSlice

export const selectProductResult = productSlice.endpoints.getProducts.select();

export const selectProductData = createSelector(
    selectProductResult,
    (result) => result.data
)

export const {selectAll:selectAllProducts,selectById:selectProductById} = 
productAdapter.getSelectors(
    (state) => selectProductData(state)??initialState
)
