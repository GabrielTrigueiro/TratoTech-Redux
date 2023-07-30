import React, { useEffect } from "react";

import styles from "./Busca.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { mudarBusca, resetarBusca } from "store/reducers/busca";
import { useLocation } from "react-router-dom";

export default function Busca() {
  const busca = useSelector((state) => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);
  return (
    <div className={styles.busca}>
      <input
        value={busca}
        onChange={(evento) => dispatch(mudarBusca(evento.target.value))}
        placeholder="O que você procura?"
        className={styles.input}
      />
    </div>
  );
}
