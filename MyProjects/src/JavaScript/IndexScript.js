"use strict"
// Якорные ссылки 
$('a[href^="#"]').click(function() {
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop:$(valHref).offset().top - 75 + "px"}); 
});
    //Анимация активных ссылок в меню 
           $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();


               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
//Увеличение картинок слайдера
 $('.image-link').magnificPopup({type:'image'});
//Отложенные анимации
let options = {threHold:[0.5]};
let observer = new IntersectionObserver(onEntry,options);
let elements = $('.element-animation');
elements.each((i,el) => {
    observer.observe(el);
});
 function onEntry(entry){
     entry.forEach(change =>{
         if (change.isIntersecting){
             change.target.classList.add('show-animation');
         }
     });
 }
// Ввели переменные
let typeSite = $('.typeSite').attr("number");
let dezing = $('.dezing').attr("number");
let adaptivity = $('.adaptivity').attr("number");
// Проверка
$('.page5').mouseleave(()=> {
    let typeSite = $('.typeSite').attr("number");
    let dezing = $('.dezing').attr("number");
    let adaptivity = $('.adaptivity').attr("number");
     console.log(typeSite,dezing,adaptivity);
});
// Создали объект
let totalCost = {
    days :[
    [1,3,5],
    [11,13,15],
    [21,23,25],
    ], 
    cost : [
    [1000,2000,3000],
    [1000,7000,10000],
    [1000,2000,3000],
    ],
}
// Подсчет величины цены
function typeSiteCost(typeSite){
    if((typeSite-1) == 0){
        return totalCost.cost[0][0];
    }
    else if((typeSite-1) == 1){
        return totalCost.cost[0][1];
    }
    else if ((typeSite-1) == 2){
        return totalCost.cost[0][2];
    }
}
function dezingCost(dezing){
    if((dezing-1) == 0){
        return totalCost.cost[1][0];
    }
    else if((dezing-1) == 1){
        return totalCost.cost[1][1];
    }
    else if ((dezing-1) == 2){
        return totalCost.cost[1][2];
    }
}
function adaptivityCost(adaptivity){
    if((adaptivity-1) == 0){
        return totalCost.cost[2][0];
    }
    else if((adaptivity-1) == 1){
        return totalCost.cost[2][1];
    }
    else if ((adaptivity-1) == 2) {
        return totalCost.cost[2][2];
    }
}
let summCost = typeSiteCost() + dezingCost() + adaptivityCost();
// Подсчет количества дней
function typeSiteDays(typeSite){
    if((typeSite-1) == 0){
        return totalCost.days[0][0];
    }
    else if((typeSite-1) == 1){
        return totalCost.days[0][1];
    }
    else if ((typeSite-1) == 2){
        return totalCost.days[0][2];
    }
}
function dezingDays(dezing){
    if((dezing-1) == 0){
        return totalCost.days[1][0];
    }
    else if((dezing-1) == 1){
        return totalCost.days[1][1];
    }
    else if ((dezing-1) == 2){
        return totalCost.days[1][2];
    }

    
}
function adaptivityDays(adaptivity){
    if((adaptivity-1) == 0){
        return totalCost.days[2][0];
    }
    else if((adaptivity-1) == 1){
        return totalCost.days[2][1];
    }
    else if ((adaptivity-1) == 2) {
        return totalCost.days[2][2];
    }
}
let sumDays = typeSiteDays() + dezingDays() + adaptivityDays();
// Выводим значения
function outputPage5(summCost, sumDays){
  $('text').text(summCost,"рублей");
  $('digit').text(sumDays,"дней")    
}
outputPage5();
// Рекламка 
$('footer').mouseenter(function(){
    alert(" Подожди не уходи на первый заказ скидка 15%");
    console.log("Works"); 
});







