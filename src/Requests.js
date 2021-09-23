const API_KEY = "a347ac66fbe3b660a0c69e99952b44c4"

const requests =  {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?/?api_key=${API_KEY}&with_networks=123`,
    fetchTrending: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;