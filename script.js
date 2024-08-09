let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
let section = document.querySelectorALL('section');
let navlinks = document.querySelectorALL('header .navbar a');
window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');

  section.forEach(sec =>{
    let top = window.onscrollY;
    let height = sec.offsetheight;
    let offset = sec.offsetheighTop - 150;
    let id = sec.getattribute('id');

    if(top => offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+'}').classList.add('active');
      });
    };
  });
}
document.querySelector('#search-icon').onclick = () =>{
	document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () =>{
	document.querySelector('#search-form').classList.remove('active')
}	

 var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
});


 var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
     

      loop:true,
      breakpoints: {
        0:{
          slidesperview: 1,
        },
        640:{
            slidesperview: 2,
        },
        768:{
            slidesperview: 2,
        },
        1024:{
            slidesperview: 3,
        },
      },
});

 function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
 }

 function fadeout(){
  setinterval(loader, 3000);
 }

 window.onload = fadeout;