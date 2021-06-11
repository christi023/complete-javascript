'use strict';
// Modal Window ___ DOM
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to open modal
const openModal = function () {
  //  console.log('Button clicked');
  modal.classList.remove('hidden'); // one can remove / add more than one class here with comma
  overlay.classList.remove('hidden');
};

// create function which close modal which is passed both to the close modal and overlay
const closeModal = function () {
  // console.log('Button closed');
  modal.classList.add('hidden'); // we add to close the modal - so we do the opposite
  overlay.classList.add('hidden');
};

// showing the modal window
for (let i = 0; i < btnsOpenModal.length; i++)
  // to create event to do something on all buttons at the same time
  btnsOpenModal[i].addEventListener('click', openModal);
// hiding the modal window
btnCloseModal.addEventListener('click', closeModal); // click event happens first then function will happen after the click
// closing the overlay and the modal if one clicks on the overlay
overlay.addEventListener('click', closeModal);

// how to respond to keyboard events
document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  console.log(e.key); // soon as we hit any key on the keyboard

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // modal do not contain the hidden class, then close the modal
    closeModal();
  }
});
