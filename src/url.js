import{API_KEY} from'./constance/constance'

export const action =`/discover/movie?api_key=${API_KEY}&with_genres=28`

export const originals =`/discover/tv?api_key=${API_KEY}&with_networks=213`

export const AdventureMovies= `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`

export const HorrorMovies= `/discover/movie?api_key=${API_KEY}&with_genres=27`

export const ActionMovies= `/discover/movie?api_key=${API_KEY}&with_genres=28`

export const AnimationMovies= `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`

export const Documentaries= `/discover/movie?api_key=${API_KEY}&with_genres=99`