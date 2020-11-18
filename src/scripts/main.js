'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', function() {
  const header = document.getElementById('header');

  if (!header.classList.toString().includes('logged')) {
    header.classList.add('logged');
  } else {
    header.classList.remove('logged')
  }
});
