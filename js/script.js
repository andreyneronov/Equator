// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false},

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // например, проверим, соответствует ли указанный медиа-запрос (screen and (max-width: 543px)) устройству
// результат проверки можно получить с помощью свойства matches (true или false)
if (window.matchMedia('screen and (max-width: 991px)').matches) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false},
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    // ... действия, если устройство отвечает медиа-запросу
  } else {
    // ... действия, если устройство не соответствует значениям медиа-запроса
  }

