import { useState } from "react";
import styles from "../image-search.module.scss"

export default function ImageSearch({ handleSubmit }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.search}>
      <input type="text" onChange={handleChange} value={query} placeholder="Try to make it weird or silly..." />
      <button onClick={() => handleSubmit(query)}>Go</button>
    </div>
  );
}
