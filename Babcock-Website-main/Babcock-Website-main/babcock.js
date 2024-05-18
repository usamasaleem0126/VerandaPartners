// Nav 
var a = document.getElementById('babcock-nav-main');


function scrolldown(){
    if(window.scrollY >= 100 ){
         a.classList.add("sticky");
    }
    else{
        a.classList.remove("sticky");
    }
 }

function openMenu(){
    document.getElementById("nav-col-links").classList.toggle("nav-col-links");
 }

//  Owl Crousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:2
        }, 
        992:{
            items:2
        },
        1199:{
            items:3
        },
    }
})
