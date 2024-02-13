import { useState } from "react";

export default function ImageSearch({ handleSubmit }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}
