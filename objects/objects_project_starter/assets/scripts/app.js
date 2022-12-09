/*jshint esversion: 8 */
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

function renderMovies() {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // movieEl.textContent = movie.info.title;
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key != 'title'){
        text = text + `${key}: ${movie.info[key]}`;
    }
  }
  movieEl.textContent = text;
  movieList.append(movieEl);
  console.log('Text = ' + text);
  });
};

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
  info:{
    title,
    [extraName]: extraValue
  },
  id: Math.random()
};

movies.push(newMovie);
renderMovies();
console.log(newMovie);
}

addMovieBtn.addEventListener('click', addMovieHandler);
