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


  // about story 등장 인터랙션
  const revealItems = document.querySelectorAll('#about_story .reveal');

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });


  // philosophy 인터랙션
  const philosophySection = document.querySelector('#philosophy');

  if (philosophySection) {
    const philosophyObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25
    });

    philosophyObserver.observe(philosophySection);
  }


  // 소재와 무드 섹션
  const materials = [
    {
      num: "01",
      title: "Oak Wood",
      ko: "오크 우드",
      copy: "공간의 중심을 잡아주는 따뜻한 우드.",
      desc: "오크 우드는 단단한 결감과 자연스러운 색으로<br>공간에 안정감과 온기를 더합니다.<br>Nesto는 오래 사용해도 부담스럽지 않은<br>나무의 질감과 다른 소재와도 자연스럽게 어울리는<br>균형을 기준으로 우드를 선택합니다.",
      img: "../images/material1.png"
    },
    {
      num: "02",
      title: "Linen",
      ko: "리넨",
      copy: "빛과 바람을 부드럽게 통과시키는 소재.",
      desc: "리넨은 작은 공간에 답답함보다<br>가벼운 여백을 남깁니다.<br>커튼이나 공간을 부드럽게 나누는 가림막처럼<br>빛이 지나는 자리에서 공간의 분위기를 과하게 꾸미지 않고 자연스럽게 정돈합니다.",
      img: "../images/material2.png"
    },
    {
      num: "03",
      title: "Soft Cotton",
      ko: "소프트 코튼",
      copy: "몸이 먼저 편안함을 느끼는<br>부드러운 촉감.",
      desc: "소프트 코튼은 침구와 쿠션처럼<br>자주 닿는 곳에 어울립니다.<br>피부에 닿는 감각이 부담스럽지 않고<br>작은 공간에서도 편안한 휴식감을 만들어줍니다.",
      img: "../images/material3.png"
    },
    {
      num: "04",
      title: "Rattan",
      ko: "라탄",
      copy: "가볍지만 공간에 자연스러운<br>리듬을 더하는 소재.",
      desc: "라탄은 수납 바구니와 의자 디테일처럼 작은 면적으로 사용해도 공간에 숨 쉬는 결을 만듭니다.<br>Nesto는 라탄을 과하게 장식하지 않고 정돈된 공간<br>안에 자연스러운 포인트로 사용합니다.",
      img: "../images/material4.png"
    }
  ];

  const steps = document.querySelectorAll(".material_step");

  const matImg = document.querySelector("#matImg");
  const matNum = document.querySelector("#matNum");
  const matTitle = document.querySelector("#matTitle");
  const matKo = document.querySelector("#matKo");
  const matCopy = document.querySelector("#matCopy");
  const matDesc = document.querySelector("#matDesc");

  function changeMaterial(index) {
    const item = materials[index];

    matImg.src = item.img;
    matImg.alt = item.title;
    matNum.textContent = item.num;
    matTitle.textContent = item.title;
    matKo.textContent = item.ko;
    matCopy.innerHTML = item.copy;
    matDesc.innerHTML = item.desc;
    materialNow.textContent = item.num;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        changeMaterial(index);
      }
    });
  }, {
    threshold: 0.6
  });

  steps.forEach(function (step) {
    observer.observe(step);
  });
});