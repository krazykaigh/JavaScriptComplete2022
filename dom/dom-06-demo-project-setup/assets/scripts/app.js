/*jshint esversion: 8 */

const addMovieModal =  document.getElementById('add-modal');
const openAddMovieModalBtn = document.getElementById('openAddMovieButton');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.getElementById('cancelAddMovie');
const confirmAddMovieBtn = document.getElementById('confirmAddMovie');
const userInputs = addMovieModal.querySelectorAll('input');
const movieListSection = document.getElementById('entry-text');
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

const renderMovieList = (title, imageUrl, rating) => {
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
  const movieListRoot = document.getElementById('movie-list');
  movieListRoot.append(movieEntry);
}

const toggleBackdrop = () => {
 backDrop.classList.toggle('visible');
};

const backdropClickHandler = () => {

};

const clearMovieInputs = () => {
  userInputs[0].value = '';
  userInputs[1].value = '';
  userInputs[2].value = '';  
}
const toggleMovieModal = () => {
  clearMovieInputs();
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();  
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
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue
    };

    movieObjArray.push(movieObj);
    console.log(movieObjArray);
    clearMovieInputs();
    renderMovieList(movieObj.title, movieObj.image, movieObj.rating);
    toggleMovieModal();

};




// const confirmMovie;
backDrop.addEventListener('click', toggleMovieModal);
openAddMovieModalBtn.addEventListener('click', toggleMovieModal);
cancelAddMovieBtn.addEventListener('click', toggleMovieModal);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);

