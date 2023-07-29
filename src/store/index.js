import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice from "./reducers/carrinho";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
  },
});

export default store;
