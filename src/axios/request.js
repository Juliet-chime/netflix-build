let api_key  =  '18d80b54cd8c3c2104b86fd33e213c30'

const requests = {
    fetchAll:`/3/movie/550?api_key=${api_key}`,
    fetchGenre:`/genre/movie/list?api_key=${api_key}&language=en-US`,
    fetchTrending: `/3/trending/all/day?api_key=${api_key}`,
    fetchTopRated:`/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    fetchLatest:`/3/movie/latest?api_key=${api_key}&language=en-US`,
    fetchPopuplar:`/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    fetchUpcoming:`/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
}

export default requests