export const fetcher = async (url: any) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }
  const json = await response.json();
  return json;
};
