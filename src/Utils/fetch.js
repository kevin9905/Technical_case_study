export const getComic = async (num) => {
  const isLatest = isNaN(num);
  //this url works in server
  const url = "https://xkcd.vercel.app/?comic=" + (!isLatest ? num : "latest");
  //this url does not work in server but works in localhost, blocks by CORS header
  //const url = "/" + (num ? num + "/" : "") + "info.0.json";
  //const url = "/info.0.json";

  const response = await fetch(url);
  const comics = await response.json();
  return comics;
};
