// замена картинки - это замена пути
// т.е. при нажатии на кнопку необходимо изменить путь к новой картинке
// 1 - необходимо как-то обратиться к тегу  
//Его необходимо как - то обозначить н - р id или класс(от этого зависит назв метода)

// class slide - контейнер каждого слайда
// class container - общий контейнер где лежат все слайды

// создаем индекс начальный и включаем функцию
let slideInd = 1;
showSlides();

// функция которая вызывает функцию показа следующего слайда
function nextSlide() {
    showSlides(slideInd += 1);
}

// функция, которая вызывает функцию показа предыдущего слайда
function previousSlide() {
    showSlides(slideInd -= 1);
}

// функция, которая выз функцию вызова текущего слайда
function itSlides(n) {
    showSlides(slideInd = n);
}

/*function clickDot(n) {
    showlides(slideInd = n);
}
*/

/*function clickDot(n) {
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
}
*/
// сама функция показывающая слайд (исходя из заданного аргумента вызыв функции)
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");    // обращается к эл-там с названием класса "slide"
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {  // проверка кол-ва слайдов и исходя из этого назнач аргумет
        slideInd = 1
    } else if (n < 1) {
        slideInd = slides.length
    }
    for (let i of slides) {   // перебор каждого слайда
        i.style.display = "none";
    }
    

    slides[slideInd - 1].style.display = "flex";
   
}

