"use strict"
let typeSite = prompt("Выберите тип сайта 0 - LendingPage 1 - Коорпоративный сайт 2 - Онлайн Магазин","напишите число");
let dezing = prompt("Выберите тип сайта 0 - Шаблонный 1 - Уникальный 2 - WOW-Дизайн","напишите число");
let adaptivity = prompt("Выберите тип сайта 0 - Пк 1 - Мобильный 2 - ПК + Мобильный","напишите число");
let cost = [
    [1000,2000,3000],
    [1000,7000,10000],
    [1000,2000,3000],
];
function typeSiteCost(typeSite){
    if(typeSite == 0){
        return cost[0][0];
    }
    else if(typeSite == 1){
        return cost[0][1];
    }
    else{
        return cost[0][2];
    }
};
function dezingCost(dezing){
    if(dezing == 0){
        return cost[1][0];
    }
    else if(dezing == 1){
        return cost[1][1];
    }
    else{
        return cost[1][2];
    }
};
function adaptivityCost(adaptivity){
    if(adaptivity == 0){
        return cost[2][0];
    }
    else if(adaptivity == 1){
        return cost[2][1];
    }
    else{
        return cost[2][2];
    }
};
let summCost = typeSiteCost() + dezingCost() + adaptivityCost();  
alert(summCost);

