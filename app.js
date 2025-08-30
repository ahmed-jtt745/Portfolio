//Navigation control setup
let head = document.querySelector('.head');
let links = document.querySelector('.links');
let btn = head.querySelector('i');

btn.addEventListener('click', (event) => {
  links.classList.toggle('show');
  
  let isOpen = links.classList.contains('show');
  btn.setAttribute('class', isOpen? "fa-solid fa-xmark": "fa-solid fa-bars");
});

links.addEventListener('click', () => {
  links.classList.remove('show');
  btn.setAttribute('class', 'fa-solid fa-bars');

});