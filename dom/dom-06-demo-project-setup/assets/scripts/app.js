/*jshint esversion: 8 */

const addMovieModal =  document.getElementById('add-modal');
const openAddMovieModalBtn = document.getElementById('openAddMovieButton');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.getElementById('cancelAddMovie');
const confirmAddMovieBtn = document.getElementById('confirmAddMovie');
const userInputs = addMovieModal.querySelectorAll('input');
const movieListSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
let movieObj = {};
let movieObjArray = [];

// *** FUNCTIONS *** ///
const updateUI = () => {
  if (movieObjArray.length === 0 ) {
    movieListSection.style.display = 'block';
  } else{
    movieListSection.style.display = 'none';
  }
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movieObjArray) {

    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movieObjArray.splice(movieIndex, 1);
  const movieListRoot = document.getElementById('movie-list');
  movieListRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
  
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
  //deleteMovie(movieId);
};



const renderMovieList = (id, title, imageUrl, rating) => {
  const movieEntry = document.createElement('li');
  movieEntry.className = 'movie-element';
  movieEntry.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-elelment__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
 movieEntry.addEventListener('click',  startDeleteMovieHandler.bind(null, id));
 const movieListRoot = document.getElementById('movie-list');
  movieListRoot.append(movieEntry);
};


const toggleBackdrop = () => {
 backDrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  clearMovieInputs();
  addMovieModal.classList.add('visible');
  toggleBackdrop();  
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if(titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5) {
      alert('Please enter valid values (ratings between 1 and 5).');
      return;
    } 

    movieObj = {
      id: Math.random().toString(),
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue
    };
      
      
    movieObjArray.push(movieObj);
    console.log(movieObjArray);
    clearMovieInputs();
    renderMovieList(movieObj.id, movieObj.title, movieObj.image, movieObj.rating);
    closeMovieModal();
    toggleBackdrop();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputs();
  };

// const confirmMovie;
backDrop.addEventListener('click', backdropClickHandler);
openAddMovieModalBtn.addEventListener('click', showMovieModal);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);

