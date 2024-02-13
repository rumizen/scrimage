import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

export default function PlayerTwo({ handleSubmit, image }) {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
      }}
    >
      <h1>PLAYER 2</h1>
      <ImageSearch handleSubmit={handleSubmit} />
      {image.title && <ImageDisplay image={image} />}
    </main>
  );
}
