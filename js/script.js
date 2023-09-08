
function OpenMenu() {
    let OpenBurger = document.querySelector(".header__burger"),
        menuBurger = document.querySelector(".burger"),
        backgroundMenu = document.querySelector(".menu-mobile"),
        hidden = document.querySelector(".body");
    OpenBurger.addEventListener
    menuBurger.classList.toggle("active"), backgroundMenu.classList.toggle("active"), hidden.classList.toggle("hidden");

}


$(document).ready((function () {
    $(".f-screen__slider").slick({
        slidesToShow: 1,
        infinite: !0,
        dots: !0,
        arrows: true,
        fade: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        pauseOnHover: false,
        focusOnSelect: true,
        prevArrow: '<button class="paginate left"><i></i><i></i></button>',
        nextArrow: '<button class="paginate right"><i></i><i></i></button>'
    })
}))



const links = document.querySelectorAll(".link");

Array.prototype.slice.call(links).forEach(function (link) {
    link.addEventListener("click", (e) => {
        const sectionName = e.currentTarget.getAttribute('to-section');
        scrollByElementName(sectionName);
    });

});

function scrollByElementName(elementName) {
    let element = "";
    element = document.querySelector(`.${elementName}`);
    if (!element) {
        return;
    }
    OpenMenu();
    let pageNavHeight = getPageNavHeight();
    let scrollToValue = element.offsetTop - pageNavHeight;
    scrollToOffset(scrollToValue);
}


function getPageNavHeight() {
    let pageNavHeight = document.querySelector('.sticky-active');
    if (pageNavHeight) {
        pageNavHeight = pageNavHeight.offsetHeight;
    } else {
        pageNavHeight = 50;
    }
    return pageNavHeight;
}


function scrollToOffset(offset) {
    window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: offset
    });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

function hideBanner(pageYOffset=0) {
    let baner = document.querySelector(".blockRedLine3103");
    let heightBlock = 0;
    if (baner != null) {
        heightBlock = baner.offsetHeight - pageYOffset;
    }
    let headerBurger = document.querySelector(".header__burger");
    let menuBurger = document.querySelector(".menu-mobile");
     
    if (heightBlock>0) {
        menuBurger.style.paddingTop = heightBlock + "px";
        headerBurger.style.marginTop = heightBlock + "px";
    } else {
        menuBurger.style.paddingTop = "0px";
        headerBurger.style.marginTop = "0px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideBanner, 700);
});


window.addEventListener("scroll", () => {
    
    hideBanner(window.pageYOffset);
})

