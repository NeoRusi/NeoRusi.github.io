"use strict"
//Wow-Js
new WOW().init(); 
//Masked input
$("#inputTel").mask("+7(999) 999-9999");
// Якорные ссылки 
$('a[href^="#"]').click(function() {
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop:$(valHref).offset().top - 75 + "px"}); 
});
//Анимация активных ссылок в меню 
$(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();


               $('.activeMenu').each((i, el) => {

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
    //Загрузка картинок при скролле
         let optionsImg = {
            threshold: [0.5]
        };
        let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
        let elementsImg = $('.lazy_image');
        elementsImg.each((i, el) => {
            observerImg.observe(el);
        });
        function onEntryImg(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            });
        }
//Калькулятор
function calculate(){
       let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
       let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function(){
       calculate();
    });
//Бегающие циферки
let optionsStat = {
    threshold: [0.5]
    };
let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
let elementsStat = $('.statAnimation');

elementsStat.each((i, el) => {
    observerStat.observe(el);
    });


function onEntryStat(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            if(!$('.statAnimation').hasClass("done")){
                $('.statAnimation').addClass("done");
                $('.statAnimation').spincrement({
                    thousandSeparator: "",
                    duration: 3000
                    });
                  }
                }
            });
}
//AJAX
$('form').submit(function(event){
    event.preventDefault();
    $.ajax({
        type:"POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function () {
            $(this).find("input").val("");
            alert("Успешно отправлено");
            $('form').trigger("reset");
            });
            return false;
});
// Рекламка 
$('footer').mouseenter(function(){
    alert(" Подожди не уходи на первый заказ скидка 15%");
    console.log("Works"); 
});







