"use client";

export default function ImageDisplay(image) {
  const { original, original_height, original_width, title } = image.image;
  console.log(image);
  return (
    <div>
      <img
        src={original}
        height={original_height}
        width={original_width}
        alt={title || "alt"}
      />
      {title && <button>Finish your turn</button>}
    </div>
  );
}
