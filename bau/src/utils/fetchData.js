export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "a6497a74d2msh1578210e650f724p11f10ajsnc0b871fcd8cd",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': "a6497a74d2msh1578210e650f724p11f10ajsnc0b871fcd8cd",
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
