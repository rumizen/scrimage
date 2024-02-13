"use client";
import { useState } from "react";
import PlayerOne from "./ui/PlayerOne";
import PlayerTwo from "./ui/PlayerTwo"
import { fetchImage } from "@/app/actions";

export default function GameWrapper() {
  const [turnStatus, setTurnStatus] = useState("initialized");
  const [image, setImage] = useState({});
  const [guessPlacement, setGuessPlacement] = useState(0);

  function calculateGuessPlacement(results) {
    console.log("image results:", results, "image:", image)
    const placement = results.find(result => result.original === image.original).position;
    setGuessPlacement(placement);
  }

  async function handleSubmit(query) {
    const data = await fetchImage(query);
    if (turnStatus === "initialized") {
      setImage(data.images_results[0]);
    }
    if (turnStatus === "completed") {
      calculateGuessPlacement(data.images_results);
    }
  }

  function advanceTurn(status) {
    setTurnStatus(status);
  }

  return (
    <>
      {turnStatus === "initialized" && (
        <PlayerOne
          handleSubmit={handleSubmit}
          image={image}
          advanceTurn={advanceTurn}
        />
      )}
      {turnStatus === "completed" && (
        <PlayerTwo
          handleSubmit={handleSubmit}
          image={image}
          guessPlacement={guessPlacement}
        />
      )}
    </>
  );
}
