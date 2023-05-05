const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

// buttons

const searchBtn = document.querySelector('#search-btn')
const cartBtn = document.querySelector('#cart-btn')
const menuBtn = document.querySelector('#menu-btn')

searchBtn.addEventListener('click',function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e){
        if(
        !e.composedPath().includes(searchBtn) &&
        !e.composedPath().includes(searchForm)
         ){
        searchForm.classList.remove('active');
        }
    });
});

cartBtn.addEventListener('click',function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e){
        if(
        !e.composedPath().includes(cartBtn) &&
        !e.composedPath().includes(cartItem)
         ){
        cartItem.classList.remove('active');
        }
    });
});


menuBtn.addEventListener('click',function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e){
        if(
        !e.composedPath().includes(menuBtn) &&
        !e.composedPath().includes(navbar)
         ){
        navbar.classList.remove('active');
        }
    });
});



//             //
// avec jquery //
//             //
// function toggleActive(elem, trigger) {
//     $(trigger).click(function(e) {
//       e.stopPropagation();
//       elem.toggleClass("active");
//     });
  
//     $(document).click(function(e) {
//       if(!$.contains($(trigger)[0], e.target) && !elem.is(e.target) && elem.has(e.target).length === 0) {
//         elem.removeClass('active');
//       }
//     });
//   }
  
//   toggleActive($(".search-form"), "#search-btn");
//   toggleActive($(".cart-items-container"), "#cart-btn");
//   toggleActive($(".navbar"), "#menu-btn");
