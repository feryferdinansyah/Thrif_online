const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
const Cart = document.querySelector('.cart');
document.querySelector('#shoping').onclick = (e) => {
 Cart.classList.toggle('active');
 e.preventDefault();
};
const SC = document.querySelector('#shoping');
document.addEventListener('click', function (e) {
  if (!SC.contains(e.target) && !Cart.contains(e.target)) {
    Cart.classList.remove('active');
  }
});
const detailItem = document.querySelector('#item-detail');
const buttonItem = document.querySelectorAll('.button-item');

buttonItem.forEach((btn) => {
  btn.onclick = (e) => {
    detailItem.style.display = 'flex';
    e.preventDefault();
  }
  
});

// close icon modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  detailItem.style.display = 'none';
  e.pr
  eventDefault();
}
// clsoe modal

window.onclick = (e) => {
  if(e.target === detailItem){
    detailItem.style.display = 'none';
  }
}