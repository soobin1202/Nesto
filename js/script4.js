document.addEventListener('DOMContentLoaded', function () {

  // top 버튼
  const topBtn = document.querySelector('.top_btn');

  if (topBtn) {
    topBtn.addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }


  // 스와이퍼
  const livingSwiper = new Swiper(".living_swiper", {
    loop: true,
    speed: 800,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: ".living_pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".living_next",
      prevEl: ".living_prev",
    },
  });


  //수납아이디어 카드 순차등장
  const storageCards = document.querySelectorAll(".storage_card");

  const storageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        storageCards.forEach(function (card) {
          card.classList.add("show");
        });
      }
    });
  }, {
    threshold: 0.3
  });

  const storageSection = document.querySelector(".storage_ideas");

  if (storageSection) {
    storageObserver.observe(storageSection);
  }

});

