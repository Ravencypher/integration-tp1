let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let carrouImg = document.getElementById('carrouImg');

prev.addEventListener('click', prevItem);
next.addEventListener('click', nextItem);

let compteur = 0;

function prevItem() {
  compteur--;
  if (compteur === -1) {
    compteur = 2;
  } 
  displayImg();
}

function nextItem() {
  compteur++;
  if (compteur === 3) {
    compteur = 0;
  } 
  displayImg();
}

function displayImg() {
    carrouImg.src = "img/" + compteur + ".jpg";
}
