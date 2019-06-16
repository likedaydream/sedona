var hotelSearchBtn = document.querySelector('.hotel-search-button');
var hotelSearchModal = document.querySelector('.modal-hotel-search');
var cssModalShow = 'modal-show';

// Show form by default
hotelSearchModal.classList.add(cssModalShow);

hotelSearchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  hotelSearchModal.classList.toggle(cssModalShow);
});
