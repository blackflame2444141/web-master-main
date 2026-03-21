    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets:true,
        clickable:true
      },
      autoplay:{
        delay:2500,
      }
      ,loop:true
    });
    /*product swiper*/

    
 var swiper2 = new Swiper(".productSwiper", {
    slidesPerView: 4, // يعرض 4 منتجات بجانب بعضها

navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
    },  
      
  })