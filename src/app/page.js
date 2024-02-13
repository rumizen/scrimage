"use client";
import { useState } from "react";
import PlayerOne from "./ui/PlayerOne";
import { fetchImage } from "@/app/actions";

export default function GameWrapper() {
  const [image, setImage] = useState({});

  async function handleSumbit(query) {
    const data = await fetchImage(query);
    setImage(data.images_results[0]);
  }

  return (
    <>
      <PlayerOne handleSubmit={handleSumbit} image={image} />
    </>
  );
}
