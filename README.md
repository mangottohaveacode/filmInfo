API_URL="https://api.themoviedb.org/3/movie/550?api_key=241f0217e9c472fb9c79403a511201bc
API_IMG="https://image.tmdb.org/t/p/w500"
API_SEARCH="
https://api.themoviedb.org/3/search/movie?api_key=241f0217e9c472fb9c79403a511201bc&language=en-US&page=1&query"

<h1>{title}</h1>
          <img src={API_IMG + poster_path}></img>
          <p>{overview}</p>
