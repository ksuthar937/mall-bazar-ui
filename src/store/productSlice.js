import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const productSlice = createAppSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
  },
  reducers: (create) => ({
    fetchProducts: create.asyncThunk(
      async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        return await res.json();
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.products = action.payload;
        },
      }
    ),
  }),
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
