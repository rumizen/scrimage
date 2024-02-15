"use client";
import { useState } from "react";
import { fetchImage } from "@/app/actions";
import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

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
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "700px",
        }}
      >
        <h1>PLAYER {playerTurn}</h1>
        <ImageSearch key={playerTurn} handleSubmit={handleSubmit} />
        {isLoading && (
          <p>
            {playerTurn === 1
              ? "Finding the top result"
              : "Calculating your score"}
            ...
          </p>
        )}
        {image.title && <ImageDisplay image={image} />}
        {playerTurn === 1 && image.title && (
          <button onClick={() => advanceTurn(2)}>Finish your turn</button>
        )}
        {playerTurn === 2 && guessPlacement > 0 && (
          <h2>The image was number {guessPlacement} in the results!</h2>
        )}
        {(playerTurn === 2 && guessPlacement === 0) && <h2>Swing and a miss!</h2>}
      </main>
    </>
  );
}
