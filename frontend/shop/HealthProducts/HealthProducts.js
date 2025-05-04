
$(document).ready(function() {                           //for swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      loop: false,
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30
        }
      }
    });
  });


  

  





  // Cart click handler
  document.querySelector('.cart-button').addEventListener('click',function() {
      alert('Cart clicked!');
      // You can replace this with actual cart logic later
      // window.location.href = '/cart'; // To navigate to cart page
  });

  // Dynamic year for copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();
