import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
  },
});

export default store;
