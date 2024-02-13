"use client";
import { useState } from "react";
import PlayerOne from "./ui/PlayerOne";
import PlayerTwo from "./ui/PlayerTwo";
import { fetchImage } from "@/app/actions";

export default function GameWrapper() {
  const [turnStatus, setTurnStatus] = useState("initialized");
  const [image, setImage] = useState({});
  const [guessPlacement, setGuessPlacement] = useState(0);

  function calculateGuessPlacement(results) {
    const placement = results.find(
      (result) => result.original === image.original
    );
    console.log(placement);
    if (placement) {
      setGuessPlacement(placement.position);
    } else {
      setGuessPlacement(0);
    }
  }

  async function handleSubmit(query) {
    const data = await fetchImage(query);
    if (turnStatus === "initialized") {
      setImage(data.images_results[0]);
    }
    if (turnStatus === "completed") {
      calculateGuessPlacement(data.images_results);
      setTurnStatus("result");
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
      {(turnStatus === "completed" || turnStatus === "result") && (
        <PlayerTwo
          handleSubmit={handleSubmit}
          image={image}
          guessPlacement={guessPlacement}
          turnStatus={turnStatus}
        />
      )}
    </>
  );
}
