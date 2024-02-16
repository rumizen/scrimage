import { useState } from "react";
import styles from "../image-search.module.scss"

export default function ImageSearch({ handleSubmit, playerTurn }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.search}>
      <input type="text" onChange={handleChange} value={query} placeholder={playerTurn === 1 ? "Search for an image (try to make it weird or silly...)" : "Guess what player 1 searched"} />
      <button onClick={() => handleSubmit(query)}>Go</button>
    </div>
  );
}
