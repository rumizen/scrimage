import styles from "../image-display.module.scss";

export default function ImageDisplay(image) {
  const { original, original_height, original_width, title } = image.image;
  return (
    <div>
      <img
        className={styles.image}
        src={original}
        height={original_height}
        width={original_width}
        alt={title || "alt"}
      />
    </div>
  );
}
