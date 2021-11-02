export const getComic = async (num) => {
  //const isLatest = isNaN(num);
  //const url = "https://xkcd.vercel.app/?comic=" + (!isLatest ? num : "latest");
  const url = "/" + (num ? num + "/" : "") + "info.0.json";
  //const url = "/info.0.json";

  const response = await fetch(url);
  const comics = await response.json();
  return comics;
};
