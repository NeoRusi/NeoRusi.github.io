"use strict"
/*let typeSite = prompt("Выберите тип сайта 1 - LendingPage 2 - Коорпоративный сайт 3 - Онлайн Магазин","напишите число");
let dezing = prompt("Выберите тип сайта 1 - Шаблонный 2 - Уникальный 3 - WOW-Дизайн","напишите число");
let adaptivity = prompt("Выберите тип сайта 1 - Пк 2 - Мобильный 3 - ПК + Мобильный","напишите число");*/

// Скролл менюшки 
$('a[href^="#"]').click(function() {
    let valHref = $(this).attr("href");
    $('html,body,').animate({scrollTop:$(valHref).offset().top - 50 + "px"}); 
};)
//Увеличение картинок слайдера
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
})
// Получаем значения переменных
function inputPage5(){
let typeSite,dezing,adaptivity; 
$('select').click( (typeSite,dezing,adaptivity) => {
    typeSite = $(this).attr('number');
    dezing = $(this).attr('number');
    adaptivity = $(this).attr('number');
};)
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
    };
    else if((typeSite-1) == 1){
        return totalCost.cost[0][1];
    };
    else if ((typeSite-1) == 2){
        return totalCost.cost[0][2];
    };
    else {
        alert(" Такого ответа быть не может");
        typeSiteCost();
        return; 
    }
};
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
        else {
        alert(" Такого ответа быть не может");
        dezingCost();
        return; 
    }
    
};
function adaptivityCost(adaptivity){
    if((adaptivity-1) == 0){
        return totalCost.cost[2][0];
    };
    else if((adaptivity-1) == 1){
        return totalCost.cost[2][1];
    };
    else if ((adaptivity-1) == 2) {
        return totalCost.cost[2][2];
    };
    else {
        alert(" Такого ответа нет ");
        adaptivityCost();
        return;
    };
};
let summCost = typeSiteCost() + dezingCost() + adaptivityCost();
// Подсчет количества дней
function typeSiteDays(typeSite){
    if((typeSite-1) == 0){
        return totalCost.days[0][0];
    };
    else if((typeSite-1) == 1){
        return totalCost.days[0][1];
    };
    else if ((typeSite-1) == 2){
        return totalCost.days[0][2];
    };
    else {
        alert(" Такого ответа быть не может");
        typeSiteCost();
        return; 
    }
};
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
        else {
        alert(" Такого ответа быть не может");
        dezingCost();
        return; 
    }
    
};
function adaptivityDays(adaptivity){
    if((adaptivity-1) == 0){
        return totalCost.days[2][0];
    };
    else if((adaptivity-1) == 1){
        return totalCost.days[2][1];
    };
    else if ((adaptivity-1) == 2) {
        return totalCost.days[2][2];
    };
    else {
        alert(" Такого ответа нет ");
        adaptivityCost();
        return;
    };
};
let sumDays = typeSiteDays() + dezingDays() + adaptivityDays();
};
// Выводим значения
inputPage5();
function outputPage5(summCost, sumDays){
  $('text').empty();
  $('digit').empty();
  $('text').text(summCost,"рублей");
  $('digit').text(sumDays,"дней")    
};
outputPage5();










