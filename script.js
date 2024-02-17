
// start search 

const searchIcone = document.querySelector('.navbar-search');
const searchModal = document.querySelector('.search-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

searchIcone.addEventListener('click', () => {
  searchModal.classList.remove('hidden')
  overlay.classList.remove('hidden');
  document.body.classList.add('overflow');

})

const closeModal = function () {
  searchModal.classList.add('hidden')
  overlay.classList.add('hidden');
  document.body.classList.remove('overflow');
}

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// end search 




// start swiper 
new Swiper('.mySwiper', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120
    }
  }
});

// end swiper


// start gallary image

window.onload = () => {
  const grid = document.querySelector('.grid')
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 440,
    gutter: 25

  })
  masonry.on('layoutComplete', () => console.log('layout Complete'))
}


// end gallary image

document.addEventListener('DOMContentLoaded', function () {
  var grid = document.querySelector('.grid');
  var iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // ایجاد نمونه Masonry
  var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 440,
    gutter: 25
  });

  // به‌روزرسانی Masonry پس از هر بار فیلتر کردن
  iso.on('arrangeComplete', function () {
    masonry.layout();
  });

  var filtersElem = document.querySelector('.row-filter');
  filtersElem.addEventListener('click', function (event) {
    if (!matchesSelector(event.target, 'li')) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    var buttonGroups = filtersElem.querySelectorAll('.filters');
    buttonGroups.forEach(function (button) {
      button.classList.remove('active-btn');
    });
    event.target.classList.add('active-btn');
  });

  function matchesSelector(element, selector) {
    if (element.matches) {
      return element.matches(selector);
    } else if (element.msMatchesSelector) {
      return element.msMatchesSelector(selector);
    } else if (element.webkitMatchesSelector) {
      return element.webkitMatchesSelector(selector);
    }
  }
});