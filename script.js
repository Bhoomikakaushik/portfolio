function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
    const menu_icon = document.getElementById("menu-icon") 
    if(nav.classList.contains("active")){
        menu_icon.textContent = "✖";
    }else{
        menu_icon.textContent = "☰";
    }
}


document.addEventListener('DOMContentLoaded', function () {

  const navLinks = document.querySelectorAll('#navLinks a');
  const nav = document.getElementById('navLinks');
  const menu_icon = document.getElementById('menu-icon');
  const EXPANDED_NAVBAR_HEIGHT = 400;
  const COLLAPSED_NAVBAR_HEIGHT = 47;

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        const navHeight = nav.classList.contains('active') ? EXPANDED_NAVBAR_HEIGHT : COLLAPSED_NAVBAR_HEIGHT;
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }

      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menu_icon.textContent = "☰";
      }
    });
  });
});


document.addEventListener('DOMContentLoaded',function(){
 
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: false,
    touchRatio: 0.7, 
    followFinger: true,
    shortSwipes: true, 
    longSwipesRatio: 0.3,
    resistance: false, 
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      990: {
        centeredSlides: true,
        touchRatio: 1, 
        followFinger: true,
        shortSwipes: false
      }
    }
  });
});


