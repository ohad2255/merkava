  new Swiper ('.main-gallery-container', {
   
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  new Swiper ('#mishpatiot-slider', {
   
    direction: 'horizontal',
    loop: true,

     pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
     },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  new Swiper ('#logo-swiper', {
   
    direction: 'horizontal',
    loop: true,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
