const showroomData = [
  {
    title: "부산 해운대점",
    desc: "바다 가까운 따뜻한 쇼룸",
    img: "../images/store2.png",
    alt: "부산 해운대점 쇼룸",
    address: "부산광역시 해운대구 달맞이길 21",
    time: "Tue - Sun / 11:00 - 19:00",
    phone: "051-987-6500",
    parking: "건물 내 주차 가능"
  },
  {
    title: "부산 전포점",
    desc: "도심 속 작은 생활 제안",
    img: "../images/store3.png",
    alt: "부산 전포점 쇼룸",
    address: "부산광역시 부산진구 전포대로 86",
    time: "Tue - Sun / 11:00 - 19:00",
    phone: "051-650-9870",
    parking: "인근 공영주차장 이용 가능"
  },
  {
    title: "서울 성수점",
    desc: "여유로운 오픈형 쇼룸",
    img: "../images/store4.png",
    alt: "서울 성수점 쇼룸",
    address: "서울특별시 성동구 성수이로 33",
    time: "Tue - Sun / 11:00 - 19:00",
    phone: "02-987-6500",
    parking: "주차 공간이 협소하여 대중교통 이용 권장"
  },
  {
    title: "서울 서촌점",
    desc: "조용하고 아늑한 공간 무드",
    img: "../images/store5.png",
    alt: "서울 서촌점 쇼룸",
    address: "서울특별시 종로구 자하문로 91",
    time: "Tue - Sun / 11:00 - 19:00",
    phone: "02-650-9800",
    parking: "인근 유료주차장 이용 가능"
  }
];

const tabItems = document.querySelectorAll(".showroom_tab li");
const tabButtons = document.querySelectorAll(".showroom_tab button");

const showroomImg = document.querySelector(".showroom_img img");
const showroomTitle = document.querySelector(".showroom_info h3");
const showroomDesc = document.querySelector(".info_desc");
const infoValues = document.querySelectorAll(".info_value li");

tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const index = this.dataset.index;
    const data = showroomData[index];

    tabItems.forEach(function (item) {
      item.classList.remove("on");
    });

    this.parentElement.classList.add("on");

    showroomImg.src = data.img;
    showroomImg.alt = data.alt;
    showroomTitle.textContent = data.title;
    showroomDesc.textContent = data.desc;

    infoValues[0].textContent = data.address;
    infoValues[1].textContent = data.time;
    infoValues[2].textContent = data.phone;
    infoValues[3].textContent = data.parking;
  });


  //팝업 메인 사진 전환효과
  const popupImgs = document.querySelectorAll(".popup_slider img");
  let popupIndex = 0;

  setInterval(function () {
    popupImgs[popupIndex].classList.remove("active");

    popupIndex++;

    if (popupIndex >= popupImgs.length) {
      popupIndex = 0;
    }

    popupImgs[popupIndex].classList.add("active");
  }, 3800);
});