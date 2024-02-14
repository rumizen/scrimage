export default function imageReducer(image, action) {
  if (action.type === "added") {
    return {
      ...image,
      id: action.id,
      text: action.text,
      done: false,
    };
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
