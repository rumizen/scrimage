"use client";
import { useEffect, useState } from "react";
import PlayerOne from "./ui/PlayerOne";
import { fetchImage } from "@/app/actions";

export default function GameWrapper() {
  const [image, setImage] = useState(null);

  
  useEffect(() => {
    async function handleSumbit(query) {
      const data = await fetchImage(query);
      setImage(data.images_results[0]);
    }
    handleSumbit("kitten");
  }, []);

  return (
    <>
      {/* <PlayerOne handleSubmit={handleSumbit} image={image} /> */}
      <p>Test</p>
      {image && <img src={image.original} height={image.original_height} width={image.original_width} />}
    </>
  );
}
