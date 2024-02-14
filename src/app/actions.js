"use server";

export async function fetchImage(query) {
  const apiKey =
    "b10292a3720dbeaaebf2f3054ad9f2069802cf97bf5b33ffb76db0f185d693fe";
  function buildQueryString(pageNumber) {
    return `https://serpapi.com/search?engine=google_images&api_key=${apiKey}&safe=active&filter=0&ijn=${pageNumber}&q=${query}`;
  }
  const res1 = await fetch(buildQueryString(0));

  if (!res1.ok) {
    throw new Error("Failed to fetch data");
  }
  return res1.json();
}
