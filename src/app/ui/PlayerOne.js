
import { useState } from "react";
import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

export default function PlayerOne({handleSubmit, image}) {
  const [turnStatus, setTurnStatus] = useState("initialized");

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
      }}
    >
      <ImageSearch handleSubmit={handleSubmit} />
      <ImageDisplay image={image} />
    </main>
  );
}
