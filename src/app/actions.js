"use server"

export async function fetchImage(query) {
  const apiKey =
    "b10292a3720dbeaaebf2f3054ad9f2069802cf97bf5b33ffb76db0f185d693fe";
    function buildQueryString(pageNumber) {
      return `https://serpapi.com/search?engine=google_images&api_key=${apiKey}&safe=active&filter=0&ijn=${pageNumber}&q=${query}`;
    }
  const res1 = await fetch(buildQueryString(0));

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res1.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res1.json();
}