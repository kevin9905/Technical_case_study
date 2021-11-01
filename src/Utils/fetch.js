export const getComic = async (num) => {
  const isLatest = isNaN(num);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //const url = "https://xkcd.vercel.app/?comic=" + (!isLatest ? num : "latest");
  const url = "https://xkcd.com/" + (num ? num + "/" : "") + "info.0.json";

  const response = await fetch(proxyUrl + url);
  const comics = await response.json();
  return comics;
};
