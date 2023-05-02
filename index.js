
// замена картинки - это замена пути
// т.е. при нажатии на кнопку необходимо изменить путь к новой картинке
// 1 - необходимо как-то обратиться к тегу  
//Его необходимо как - то обозначить н - р id или класс(от этого зависит назв метода)

// class slide - контейнер каждого слайда
// class container - общий контейнер где лежат все слайды

// создаем индекс начальный и включаем функцию
let slideInd = 1;
showSlides(slideInd);

// функция которая вызывает функцию показа следующего слайда
function nextSlide() {
    showSlides(slideInd += 1);
}

// функция, которая вызывает функцию показа предыдущего слайда
function previousSlide() {
    showSlides(slideInd -= 1);
}
// функция срабатывания индикатора
function clickDot(n) {
    showSlides(slideInd = n);
} 
// сама функция,  показывающая слайд (исходя из заданного аргумента вызыв функции)
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");    // обращается к эл-там с названием класса "slide"
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {  // проверка кол-ва слайдов и исходя из этого назнач аргумет
        slideInd = 1
    } else if (n < 1) {
        slideInd = slides.length
    }
    for (i = 0; i < slides.length; i++) {   // перебор каждого слайда
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideInd - 1].style.display = "flex";
    dots[slideInd - 1].className += " active";
}

