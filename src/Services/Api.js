const API_URL = "https://dummyjson.com/posts";

export const getCampaigns = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  const data = await response.json();

  return data.posts;
};