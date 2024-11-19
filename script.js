var swiper = new Swiper('.swiper-container.two', {
  // Basic configuration
  effect: 'cards',
  grabCursor: true,
  loop: true,
   initialSlide: 11,
  centeredSlides: true,
  slidesPerView: 'auto',

  // Cards effect specific configuration
  cardsEffect: {
    slideShadows: false,        // Enable/disable slide shadows
    rotate: true,               // Enable/disable rotation
    perSlideRotate: 4,         // Rotation angle for each slide (degrees)
    perSlideOffset: 4,         // Offset distance for each slide (px)
    transformEl: null,         // CSS selector of the element to transform
    limitRotation: true,       // Limit maximum rotation to perSlideRotate value
    rotate: true,              // Enable/disable rotation effect
    stretch: 0,                // Stretch space between slides (px)
    depth: 100,               // Depth offset in px (slides translate in Z axis)
    modifier: 1,              // Effect multiplier
    initialSlide: 0,          // Starting slide index
    rotate: 50,               // Slide rotate in degrees
    scale: 1,                 // Slide scale effect
    
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//  // Pagination
//  pagination: {
//    el: '.swiper-pagination',
//    clickable: true,
//    type: 'bullets',  // 'bullets' | 'fraction' | 'progressbar' | 'custom'
//  },

  // Additional optional properties
  speed: 400,               // Transition speed in ms
  direction: 'horizontal',  // 'horizontal' | 'vertical'
  threshold: 5,            // Distance needed for swipe action
  resistance: true,        // Resistance bounds
  resistanceRatio: 0.85,   // Resistance ratio
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

 // Autoplay (optional)
 autoplay: {
   delay: 2000,
   disableOnInteraction: false,
 },

  // Breakpoints for responsive design
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    }
  }
});
