export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0af5be08a9msh314b5bc4dda33a6p158536jsn55058657145e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '0af5be08a9msh314b5bc4dda33a6p158536jsn55058657145e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
