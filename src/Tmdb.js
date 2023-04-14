const API_KEY = 'fefa7431caf87fc9415f02a04a8a02c4'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFecth = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: "Originais do Netflix",
        items: await basicFecth(`/discover/tv/?with_networks=213&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'trending',
        title: "Recomendados para Você",
        items: await basicFecth(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'toprated',
        title: "Em Alta",
        items: await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: "Ação",
        items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: "Comédia",
        items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: "Terror",
        items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: "Romance",
        items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: "Documentários",
        items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFecth(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
          break;
        case 'tv':
          info = await basicFecth(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`);
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  }
}