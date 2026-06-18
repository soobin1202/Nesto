document.addEventListener("DOMContentLoaded", function () {
  const typingLines = [
    {
      el: document.querySelector("#typeLine1"),
      text: "welcome to"
    },
    {
      el: document.querySelector("#typeLine2"),
      text: "your nest"
    }
  ];

  const arrow = document.querySelector(".arrow");

  let lineIndex = 0;
  let charIndex = 0;

  function typeText() {
    if (lineIndex >= typingLines.length) {
      typingLines[typingLines.length - 1].el.classList.add("active");
      return;
    }

    typingLines.forEach(line => line.el.classList.remove("active"));

    const currentLine = typingLines[lineIndex];
    currentLine.el.classList.add("active");

    if (charIndex < currentLine.text.length) {
      currentLine.el.textContent += currentLine.text.charAt(charIndex);
      charIndex++;

      setTimeout(typeText, 90);
    } else {
      currentLine.el.classList.remove("active");
      lineIndex++;
      charIndex = 0;

      setTimeout(typeText, 350);
    }
  }

  // 1. 방에 불이 켜진 뒤
  // 2. 화살표가 먼저 나타나고
  // 3. 글씨 타이핑 시작
  setTimeout(function () {
    arrow.classList.add("show");
  }, 1500);

  setTimeout(function () {
    typeText();
  }, 2000);
});





document.addEventListener('DOMContentLoaded', function () {
    const brandValue = document.querySelector('.brand_value');

    if (!brandValue) return;

    function checkBrandValue() {
        const brandValueTop = brandValue.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.82;

        if (brandValueTop < triggerPoint) {
            brandValue.classList.add('on');
            window.removeEventListener('scroll', checkBrandValue);
        }
    }

    window.addEventListener('scroll', checkBrandValue);
    checkBrandValue();
});



$(function(){
  $(".journal_list > li").click(function(){
    let i = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");
    $(".journal_card").eq(i).addClass("on").siblings().removeClass("on");
  });
});


$(function () {
  $(".materials").on("mouseenter", function () {
    $(".custom_cursor").show();
  });

  $(".materials").on("mouseleave", function () {
    $(".custom_cursor").hide();
  });

  $(".materials").on("mousemove", function (e) {
    $(".custom_cursor").css({
      left: e.clientX + "px",
      top: e.clientY + "px",
      opacity: 1
    });
  });

  $(".custom_cursor").hide();
});




const topBtn = document.querySelector(".top_btn");

topBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});