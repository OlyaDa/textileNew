
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//scroll

$('.nav-link-new').mPageScroll2id();


//mobile menu (header)

$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 1){
        $('.header').addClass('color');
    } else{
        $('.header').removeClass('color');
    }
});


$(function(){
    $('.toggle-menu').on('click',function(){
        $('.mobile-menu').toggleClass('show');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function() {
    $('.mobile-menu').click(function () {
        $('.mobile-menu').removeClass('show');
        $('.toggle-menu').removeClass('menu-on');
    });

    $(document).ready(function() {
        $('.nav-link-new').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });

        $('.content').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });
    });
});

//slider for "why"

$('.why-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/al.png" class="arrow"> </img> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <img src="images/ar.png" class="arrow"> </img></button>',
});

//slider for "companies"

$('.companies-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/al.png" class="arrow"> </img> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <img src="images/ar.png" class="arrow"> </img></button>',
    dots: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

//slider for "examples"

$('.examples-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/al.png" class="arrow"> </img> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <img src="images/ar.png" class="arrow"> </img></button>',
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/al.png" class="arrow"> </img> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <img src="images/ar.png" class="arrow"> </img></button>',
});

// setNameScroll

const nameScroll = document.getElementById('input_order');
const inMail = document.getElementById('inMail');

function setNameScroll(namescroll, mail) {

    nameScroll.value = namescroll;

    if (mail == 'true') {
        inMail.classList.remove('d-none');
        inMail.setAttribute('required', 'required');
    }
    else {
        inMail.classList.add('d-none');
        inMail.removeAttribute('required', 'required');
    }
};

//tele-order

$(document).ready(function(){
    $('.order-main').submit(function(e){
        e.preventDefault();
        $.magnificPopup.close();
        $(".disbutt").prop("disabled", true);
        $.ajax({
            type:'POST',
            url:'/wp-content/themes/baugroup/tele_order.php',
            data: $(this).serialize()
        }).done(function(){
            $.magnificPopup.close();
            setTimeout(function(){
                window.location = 'done';
            },1);
        });
    });
});