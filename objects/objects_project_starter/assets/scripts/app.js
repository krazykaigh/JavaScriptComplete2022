/*jshint esversion: 8 */
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

function renderMovies(filter = '') {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies 
  : movies.filter(movie => movie.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // movieEl.textContent = movie.info.title;
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key != 'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
    console.log('Text = ' + text);
  });
}

function addMovieHandler() {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim === '' ||
    extraName === '' ||
    extraValue === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random().toString()
  };

  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
}

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);