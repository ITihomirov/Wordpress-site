//Mouse//

function update(e) {
    var x = e.clientX || e.touches[1].clientX
    var y = e.clientY || e.touches[1].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);

//Mouse End//

//sliders// 

const swiper = new Swiper('.partners__swiper', {
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    centeredSlides: true,
    freeMode: true,
    speed: 2500,
    spaceBetween: 20,
    autoplay: {
        delay: 1,
    },

});

var menu = ['Search Engine Optimisation (SEO)', 'Local SEO', 'Paid Search ', 'Paid Social', 'Programmatic & Media Buying', 'Web Design', 'Agile Web Design', 'Conversion Rate Optimisation (CRO)', 'User Interface / User Experience Design (UI / UX)', 'Data Analytics', 'Content Marketing', 'Complete digital Strategy']

const swiper4 = new Swiper('.services-swiper', {
    centeredSlides: true,
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-services",
        prevEl: ".swiper-button-prev-services",
    },
    pagination: {
        el: '.swiper-pagination',
        paginationPerColum: 2,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

});

const swiper3 = new Swiper('.how-it-works__swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            autoplay: {
                delay: 500,
                loop: true,
            },
        },
        500: {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 0,

            },
        },
        992: {
            slidesPerView: 3,
         
        },
        navigation: {
            nextEl: ".swiper-button-next-how-it-work",
            prevEl: ".swiper-button-prev-how-it-work",
        }

    }});

//sliders end// 

//parralax-bg//
$(window).scroll(function () {
    $("body").css("background-position", "50% " + ($(this).scrollTop() / 5) + "px");
});

//Lottie animations//

LottieInteractivity.create({
    player: "#lottie2",
    mode: "scroll",
    actions: [{
        visibility: [0.30, 1.0],
        type: "play",
        frames: [559, 480]
    }]
});

//Lottie animations end//

//scroll spy//
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop() + 92;
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.page-nav a.active').removeClass('active');
            $('.page-nav a').eq(i).addClass('active');
        }
    });
}).scroll();
//scroll spy  end//


window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Text writer //

var dataText = ['SEO', 'Paid Media', 'Web Design', 'CRO', 'UI/UX', 'Content', 'Data Analytics', 'Strategy'];

document.addEventListener('DOMContentLoaded', function (event) {
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.getElementById('typewriter').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 150);
        }
        else {
            setTimeout(fnCallback, 1500);
        }
    }
    function StartTextAnimation(i) {
        if (dataText[i] == undefined) {
            i = 0;
        }

        typeWriter(dataText[i], 0, function () {
            StartTextAnimation(i + 1);
        });

    }
    // start the text animation
    StartTextAnimation(0);
});

// Text writer end//

