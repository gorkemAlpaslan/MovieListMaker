const addMovieModal = document.getElementById("add-modal");
const addMovieButton = document.getElementById("add-movie");
const backDrop = document.getElementById("backdrop");
const cancleAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancleAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl} alt="${title}"> 
    
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 ⭐</p>  
    </div>
  `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const backdropTransparan = () => {
  backDrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  backdropTransparan();
};

const backdropClickHandler = () => {
  addMovieModal.classList.toggle("visible");
  backdropTransparan();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancleAddMovieHandler = () => {
  addMovieModal.classList.toggle("visible");
  backdropTransparan();
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInputs();
  updateUI();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
};

addMovieButton.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backdropClickHandler);
cancleAddMovieButton.addEventListener("click", cancleAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
