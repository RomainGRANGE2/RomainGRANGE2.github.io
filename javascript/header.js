const header = document.querySelector('.header__head');
const hight = innerHeight;
window.addEventListener('scroll', () => {
    if (window.scrollY > hight) {
        header.classList.add('scroll__header');
        $('.header__head__ul li a').addClass('scroll__text')
        $('.header__head__title').addClass('scroll__title')
        $('.header__head__ul li a').removeClass('-curent__color')
    } else {
        header.classList.remove('scroll__header');
        $('.header__head__ul li a').removeClass('scroll__text')
        $('.header__head__title').removeClass('scroll__title')
        $('.header__head__ul li a').addClass('-curent__color')
    }
})