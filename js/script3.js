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

  /* 상단 자동 슬라이드 */
  const slides = document.querySelectorAll(".visual_slide");
  let slideIndex = 0;

  setInterval(function () {
    slides[slideIndex].classList.remove("active");

    slideIndex++;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    slides[slideIndex].classList.add("active");
  }, 3000);


  /* 공간 탭 메뉴 */
const tabBtns = document.querySelectorAll(".space_tab");
const panels = document.querySelectorAll(".space_panel");

function showSpacePanel(target, scrollMove) {
  const targetPanel = document.getElementById(target);

  if (!targetPanel) return;

  tabBtns.forEach(function (tab) {
    tab.classList.remove("active");
  });

  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });

  const targetTab = document.querySelector('.space_tab[data-target="' + target + '"]');

  if (targetTab) {
    targetTab.classList.add("active");
  }

  targetPanel.classList.add("active");

   if (scrollMove === true) {
    const header = document.querySelector("#header_bg");
    const headerHeight = header ? header.offsetHeight : 90;

    const spaceContents = document.querySelector(".space_contents");
    const offsetTop = spaceContents.offsetTop - headerHeight - 10;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
}


/* 아래 탭 버튼 클릭했을 때 */
tabBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const target = btn.getAttribute("data-target");

    showSpacePanel(target, false);

    history.replaceState(null, null, "#" + target);
  });
});


/* GNB 서브메뉴 클릭했을 때 */
const byspaceLinks = document.querySelectorAll('a[href*="byspace.html#"]');

byspaceLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const url = new URL(link.href);
    const target = url.hash.replace("#", "");

    const isSamePage = url.pathname === window.location.pathname;
    const targetPanel = document.getElementById(target);

    if (isSamePage && targetPanel) {
      e.preventDefault();

      showSpacePanel(target, true);

      history.replaceState(null, null, "#" + target);
    }
  });
});


/* 주소에 #oneroom 같은 값이 붙어서 들어왔을 때 */
const hashTarget = window.location.hash.replace("#", "");

if (hashTarget) {
  showSpacePanel(hashTarget, true);
}

});

