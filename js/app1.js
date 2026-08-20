"use strict";

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 25,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
const modalBtnsAll = document.querySelector('.modalBtnsAll');

// For modal button #1
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

// For modal button #2
const modala = document.querySelector(".modala");
const overlaya = document.querySelector(".overlaya");
const btnCloseModala = document.querySelector(".close-modala");
const btnsOpenModala = document.querySelector(".show-modala");

// For modal button #3
const modalb = document.querySelector(".modalb");
const overlayb = document.querySelector(".overlayb");
const btnCloseModalb = document.querySelector(".close-modalb");
const btnsOpenModalb = document.querySelector(".show-modalb");

// For modal button #4
const modalc = document.querySelector(".modalc");
const overlayc = document.querySelector(".overlayc");
const btnCloseModalc = document.querySelector(".close-modalc");
const btnsOpenModalc = document.querySelector(".show-modalc");

// For modal button #5
const modald = document.querySelector(".modald");
const overlayd = document.querySelector(".overlayd");
const btnCloseModald = document.querySelector(".close-modald");
const btnsOpenModald = document.querySelector(".show-modald");

// For modal button #1
const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// For modal button #2
const openModala = function () {
  console.log("Button clicked");
  modala.classList.remove("hidden");
  overlaya.classList.remove("hidden");
};

const closeModala = function () {
  modala.classList.add("hidden");
  overlaya.classList.add("hidden");
};

btnsOpenModala.addEventListener("click", openModala);

btnCloseModala.addEventListener("click", closeModala);
overlaya.addEventListener("click", closeModala);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modala.classList.contains("hidden")) {
    closeModala();
  }
});
// For modal button #3
const openModalb = function () {
  console.log("Button clicked");
  modalb.classList.remove("hidden");
  overlayb.classList.remove("hidden");
};

const closeModalb = function () {
  modalb.classList.add("hidden");
  overlayb.classList.add("hidden");
};

btnsOpenModalb.addEventListener("click", openModalb);

btnCloseModalb.addEventListener("click", closeModalb);
overlayb.addEventListener("click", closeModalb);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modalb.classList.contains("hidden")) {
    closeModalb();
  }
});
// For modal button #4
const openModalc = function () {
  console.log("Button clicked");
  modalc.classList.remove("hidden");
  overlayc.classList.remove("hidden");
};

const closeModalc = function () {
  modalc.classList.add("hidden");
  overlayc.classList.add("hidden");
};

btnsOpenModalc.addEventListener("click", openModalc);

btnCloseModalc.addEventListener("click", closeModalc);
overlayc.addEventListener("click", closeModalc);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modalc.classList.contains("hidden")) {
    closeModalc();
  }
});
// // For modal button #5
// const openModald = function () {
//   console.log("Button clicked");
//   modald.classList.remove("hidden");
//   overlayd.classList.remove("hidden");
// };

// const closeModald = function () {
//   modald.classList.add("hidden");
//   overlayd.classList.add("hidden");
// };

// btnsOpenModald.addEventListener("click", openModald);

// btnCloseModald.addEventListener("click", closeModald);
// overlayd.addEventListener("click", closeModald);

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);

//   if (e.key === "Escape" && !modald.classList.contains("hidden")) {
//     closeModald();
//   }
// });

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.modalBtnsAll').querySelectorAll('.nav__link');
    // const logo = link.closest('.modalBtnsAll').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = this;
  }
};
// Passing "argument" into handler
modalBtnsAll.addEventListener('mouseover', handleHover.bind(0.5));

modalBtnsAll.addEventListener('mouseout', handleHover.bind(1));

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();


// For submit button on demo lesson form
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});