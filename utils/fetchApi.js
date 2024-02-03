import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '54839da39emshc17dba8def25bf6p1f5ae5jsn9907c71db6bf',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
}