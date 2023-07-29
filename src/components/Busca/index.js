import React from "react";

import styles from "./Busca.module.scss";

export default function Busca() {
  return (
    <div className={styles.busca}>
      <input placeholder="O que você procura?" className={styles.input} />
    </div>
  );
}
