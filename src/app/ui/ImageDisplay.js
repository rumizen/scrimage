export default function ImageDisplay(image) {
  const { original, original_height, original_width, title } = image.image;
  return (
    <div>
        <img
          src={original}
          height={original_height}
          width={original_width}
          alt={title || "alt"}
        />
    </div>
  );
}
