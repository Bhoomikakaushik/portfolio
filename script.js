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
    centeredSlides: true,

    // If we need pagination
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

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // breakpoints: {
    //   0: {
    //     slidesPerView: 1
    //   },
    //   768: {
    //     slidesPerView: 2
    //   },
    //   1024: {
    //     slidesPerView: 3
    //   }
    // }
  });
});


