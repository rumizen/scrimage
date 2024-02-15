"use client";
import { useState } from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import { fetchImage } from "@/app/actions";

export default function GameWrapper() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [image, setImage] = useState({});
  const [guessPlacement, setGuessPlacement] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const data = await fetchImage(query);
    if (playerTurn === 1) {
      setImage(data.images_results[0]);
      setIsLoading(false);
    }
    if (playerTurn === 2) {
      calculateGuessPlacement(data.images_results);
      setIsLoading(false);
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
          isLoading={isLoading}
        />
      )}
      {playerTurn === 2 && (
        <PlayerTwo
          handleSubmit={handleSubmit}
          image={image}
          guessPlacement={guessPlacement}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
