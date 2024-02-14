import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

export default function PlayerTwo({ handleSubmit, image, guessPlacement }) {
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
      {guessPlacement > 0 && (
        <h2>The image was number {guessPlacement} in the results!</h2>
      )}
      {guessPlacement === 0 && <h2>Swing and a miss!</h2>}
    </main>
  );
}
