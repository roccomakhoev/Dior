const swiperTop = new Swiper(".top__swiper", {
  effect: "fade",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



document.querySelectorAll('.accordeon__trigger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active')
  })
});



document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  var email = document.getElementById('email').value;
 
  alert('E-mail отправлен!');
  this.reset();
});