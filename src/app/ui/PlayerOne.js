import ImageSearch from "./imageSearch";
import ImageDisplay from "./ImageDisplay";

export default function PlayerOne({ handleSubmit, image, advanceTurn }) {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
      }}
    >
      <ImageSearch handleSubmit={handleSubmit} />
      {image.title && (
        <>
          <ImageDisplay image={image} />
          <button onClick={() => advanceTurn("completed")}>
            Finish your turn
          </button>
        </>
      )}
    </main>
  );
}
