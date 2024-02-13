import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

export default function PlayerTwo({
  handleSubmit,
  image,
  guessPlacement,
  turnStatus,
}) {
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
      {image.title && <ImageDisplay image={image} />}
      {(turnStatus === "result" && guessPlacement > 0) && (
        <h2>The image was number {guessPlacement} in the results!</h2>
      )}
      {(turnStatus === "result" && guessPlacement === 0) && (
        <h2>Swing and a miss!</h2>
      )}
      <ImageSearch handleSubmit={handleSubmit} />
    </main>
  );
}
