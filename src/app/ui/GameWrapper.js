"use client";
import { useState } from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import { fetchImage } from "@/app/actions";

export default function GameWrapper() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [image, setImage] = useState({});
  const [guessPlacement, setGuessPlacement] = useState(null);

  function calculateGuessPlacement(results) {
    const placement = results.find(
      (result) => result.original === image.original
    );
    if (placement) {
      setGuessPlacement(placement.position);
    } else {
      setGuessPlacement(0);
    }
  }

  async function handleSubmit(query) {
    const data = await fetchImage(query);
    if (playerTurn === 1) {
      setImage(data.images_results[0]);
    }
    if (playerTurn === 2) {
      calculateGuessPlacement(data.images_results);
    }
  }

  function advanceTurn(status) {
    setPlayerTurn(status);
  }

  return (
    <>
      {playerTurn === 1 && (
        <PlayerOne
          handleSubmit={handleSubmit}
          image={image}
          advanceTurn={advanceTurn}
        />
      )}
      {playerTurn === 2 && (
        <PlayerTwo
          handleSubmit={handleSubmit}
          image={image}
          guessPlacement={guessPlacement}
        />
      )}
    </>
  );
}
