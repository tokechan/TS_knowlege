export async function fetchImage() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log("fetchImage: 画像情報を取得しました");
  return images[0];
}