export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '986ed114cemsh69203822f86071dp11556ajsn19ffd1701c25',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '986ed114cemsh69203822f86071dp11556ajsn19ffd1701c25',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
