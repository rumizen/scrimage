import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

export default function PlayerOne({ handleSubmit, image, advanceTurn, isLoading }) {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
      }}
    >
      <h1>PLAYER 1</h1>
      <ImageSearch handleSubmit={handleSubmit} />
      {isLoading && <p>Finding the top result...</p>}
      {image.title && (
        <>
          <ImageDisplay image={image} />
          <button onClick={() => advanceTurn(2)}>Finish your turn</button>
        </>
      )}
    </main>
  );
}
