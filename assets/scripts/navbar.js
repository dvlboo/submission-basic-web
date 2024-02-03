function ngubahNavbar() {
  var header = document.querySelector('header');
  var imgLogo = document.querySelector('.header img');
  // var menu = document.querySelector('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 70) {
    header.style.backgroundColor = 'var(--sec-bg-color)';
    imgLogo.src = '../assets/images/logo-dark.png';
  } else {
    header.style.backgroundColor = 'transparent';
    imgLogo.src = '../assets/images/logo-light.png'
  }
}


window.addEventListener('scroll', ngubahNavbar);


var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

// ini buat di hamburger menu biar ganti X
menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};


// scroll function
var section = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id +']').classList.add('active');
      });
    };
  });


  var header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // ini kebalikan si hamburger nanti
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};