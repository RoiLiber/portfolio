// add words to the span
const spanBlue = document.querySelector(".color-blue");
let frontEndDeveloper = "A Front End Developer".split("");

function writeLetter(letter) {
    spanBlue.innerHTML = spanBlue.innerHTML += letter;
};

function run() {
    if (spanBlue.innerHTML === "") {
        for (var i = 0; i < frontEndDeveloper.length; i++) {
            setTimeout((function (i) {
                return function () {
                    writeLetter(frontEndDeveloper[i]);
                }
            })(i), i * 200);
        };
    };
};

//window scroll function:
//==========================

// scrooll to the top of the page by div up
let intervalId = 0;
const scrollButton = document.querySelector('.up');

function scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 20);
};

function scrollToTop() {
    intervalId = setInterval(scrollStep, 2);
};

scrollButton.addEventListener('click', scrollToTop);

$(window).scroll(function () {
    let scroll = $(window).scrollTop() + 50;
    if (scroll > (document.body.clientHeight - 750)) {
        $("div.up").css("animation", "arrowone 500ms both infinite");
    } else {
        $("div.up").css("animation", "none");
    }
});

//capture scroll any percentage
$(window).scroll(function () {
    let wintop = $(window).scrollTop(),
        docheight = $(document).height(),
        winheight = $(window).height();
    let scrolled = (wintop / (docheight - winheight)) * 100;

    $('.scroll-line').css('width', (scrolled + '%'));
});

// scroll linkes fixed rigth
let sOffset = $(".social.kid").offset().top - 52;
let shareheight = $(".social.kid").height() + 50;

$(window).scroll(function () {
    let scrollYpos = $(document).scrollTop();

    if (scrollYpos > sOffset) {
        $(".social.kid").css({
            'width': '80px',
            'position': 'fixed',
            'top': '80px',
            'left': '0px',
            'flex-wrap': 'wrap',
        });
        $("div.sayHello h1").css({
            'position': 'fixed',
            'top': '180px',
            'left': '-10px',
        });
        $("div.sayHello .p").css({
            'position': 'fixed',
            'top': '150px',
            'left': '-10px',
        });
    } else {
        $(".social.kid").css({
            'position': 'relative',
            'top': '0px',
            'left': '0px',
            'width': '100%',
        });
        $("div.sayHello h1, .p").css({
            'position': 'relative',
            'top': '0px',
            'left': '0px',
        });
    }
});

$(window).scroll(function () {
    let scrollYpos = $(document).scrollTop();

    if (scrollYpos > sOffset + 700) {
        $("div.sayHello h1").css({
            'display': 'none',
        });
        $("div.sayHello .p").css({
            'display': 'none',
        });
    } else {
        $("div.sayHello h1, .p").css({
            'display': 'block',
        });
    }
    if (scrollYpos > sOffset + 300) {
        $("div.photo").css({
            'display': 'none',
        });
    } else {
        $("div.photo").css({
            'display': 'block',
        });
    }
});
// section.hero div
//header color
const shareheightHello = $('section.hero div div.notHere').offset().top;

$(window).scroll(function () {
    let scroll = $(window).scrollTop() + 50;
    if (scroll > shareheightHello) {
        $("div.head").css("background", "#FFFEF1");
    } else {
        $("div.head").css("background", "");
    }
});

//click function's:
//=================

// scrooll to section's - nav manu's
$('.arrow').click(function () {
    $('html, body').animate({
        scrollTop: ($('.hireMe').offset().top - 67)
    }, 500);
});
// scrooll to home section
$('.homeButton').click(function () {
    $('html, body').animate({
        scrollTop: '0px'
    }, 500);
});

// scrooll to about section 
$('.aboutButton').click(function () {
    $('html, body').animate({
        scrollTop: ($('.me').offset().top - 67)
    }, 500);
});

// scrooll to skills section 
$('.skillsButton').click(function () {
    $('html, body').animate({
        scrollTop: ($('.skills').offset().top - 67)
    }, 500);
});

// scrooll to servics section 
$('.servicesButton').click(function () {
    $('html, body').animate({
        scrollTop: ($('.services').offset().top - 67)
    }, 500);
});

// scrooll to work section 
$('.workButton').click(function () {
    $('html, body').animate({
        scrollTop: ($('.myWork').offset().top - 67)
    }, 500);
});

// scrooll to contact section 
$('.contactButton, .hireMe div, .cont').click(function () {
    $('html, body').animate({
        scrollTop: ($('.contactMe').offset().top - 67)
    }, 500);
});

// links
$('.face').click(function () {
    window.location.href = 'https://www.facebook.com/liber.roi';
});

$('.ins').click(function () {
    window.location.href = 'https://www.instagram.com/liber.roi';
});

$('.google').click(function () {
    window.location.href = 'https://www.google.co.il';
});

$('.twitt').click(function () {
    window.location.href = 'https://www.linkedin.com/in/roi-liber-7b610389/';
});

$('footer p').click(function () {
    window.location.href = 'file:///C:/Users/liber/netcraft/portfolio/index.html?name=&email=gjghfhfhfhfhjgfhjgf&name=&Subject=&text=';
});

$('.head span').click(function () {
    window.location.href = 'http://remo-personal-portfolio.bitballoon.com';
});

$('.img-kid.sis').click(function () {
    $(".my-pic").html('<img src="img/n.jpg" alt=""><div class="clear"></div>');
});

$('.img-kid.nis').click(function () {
    $(".my-pic").html('<img src="img/nnn.jpg" alt=""><div class="clear"></div>');
});

$('.img-kid.kid').click(function () {
    $(".my-pic").html('<img src="img/nn.jpg" alt=""><div class="clear"></div>');
});

$('.img-kid.lib').click(function () {
    $(".my-pic").html('<img src="img/liber.jpg" alt=""><div class="clear"></div>');
});

// nav open
const nav = document.querySelector(".nav");
const manu = document.querySelector("#manu");

function navShows() {

    if (nav.style.display == "none") {
        nav.style.display = "block";
        $(".lineOne").css({
            'position': 'relative',
            'top': '4.5px',
            'z-index': '10',
            'transform': 'rotate(45deg)'
        });
        $(".lineTwo").css({
            'display': 'none'
        });
        $(".lineTree").css({
            'position': 'relative',
            'top': '-4.5px',
            'z-index': '5',
            'transform': 'rotate(-45deg)'
        });
    } else {
        nav.style.display = "none";
        $(".lineOne").css({
            'transform': 'rotate(0deg)',
            'position': 'relative',
            'top': '0',
            'z-index': '10'
        });
        $(".lineTwo").css({
            'display': 'block'
        });
        $(".lineTree").css({
            'transform': 'rotate(0deg)',
            'position': 'relative',
            'top': '0',
            'z-index': '5'
        });
    }
};

manu.addEventListener("click", navShows);

//work search nav-bar
$('#all').click(function () {
    $(".Developement").css("display", "flex");
    $(".Design").css("display", "flex");
    $(".Photography").css("display", "flex");
});

$('#Developement').click(function () {
    $(".Developement").css("display", "flex");
    $(".Design").css("display", "none");
    $(".Photography").css("display", "none");
});

$('#Design').click(function () {
    $(".Developement").css("display", "none");
    $(".Design").css("display", "flex");
    $(".Photography").css("display", "none");
});

$('#Photography').click(function () {
    $(".Developement").css("display", "none");
    $(".Design").css("display", "none");
    $(".Photography").css("display", "flex");
});

// span count function

$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({
        count: settings.start
    }).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$(".skills").hover(() => {
    $('#num1').jQuerySimpleCounter({
        end: 95,
        duration: 3000
    });
    $('#num2').jQuerySimpleCounter({
        end: 90,
        duration: 3000
    });
    $('#numb3').jQuerySimpleCounter({
        end: 80,
        duration: 2000
    });
    $('#num4').jQuerySimpleCounter({
        end: 50,
        duration: 2500
    });
    $('#num5').jQuerySimpleCounter({
        end: 20,
        duration: 3000
    });
    $('#num6').jQuerySimpleCounter({
        end: 60,
        duration: 3000
    });
    $('#num7').jQuerySimpleCounter({
        end: 40,
        duration: 2000
    });
    $('#num8').jQuerySimpleCounter({
        end: 30,
        duration: 2500
    });
})


$(".likes").hover(() => {
    $('#num10').jQuerySimpleCounter({
        end: 27,
        duration: 3200
    });
    $('#num11').jQuerySimpleCounter({
        end: 58,
        duration: 3000
    });
    $('#num12').jQuerySimpleCounter({
        end: 711,
        duration: 2000
    });
    $('#num13').jQuerySimpleCounter({
        end: 807,
        duration: 2500
    });
})

//===============

function init() {
    run();
};

$(document).ready(function () {
    init()
});



/*
function run() {
    if (spanBlue.innerHTML === "") {
        for (var i = 0; i < frontEndDeveloper.length; i++) {
            setTimeout((function (i) {
                return function () {
                    writeLetter(frontEndDeveloper[i]);
                }
            })(i), i * 200);
        };
    }
    else if (true) {
        for (var i = 19; 0 <= i <= frontEndDeveloper.length ; i--) {
            setTimeout((function (i) {
                return function () {
                    backWriteLetter(frontEndDeveloper[i]);
                }
            })(i), i * 200);
        };
    };  
};

setInterval(run, 3000);
*/

const workList = [{
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Developement",
        background: "blue",
        img: "img/code4.jpg",
        creator: "Liber.Ltd",
        class: "margin-right"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Developement",
        background: "DeepSkyblue",
        img: "img/036.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Developement",
        background: "Midnightblue",
        img: "img/code3.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Developement",
        background: "Dodgerblue",
        img: "img/images.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Design",
        background: "Gray",
        img: "img/batman.jpg",
        creator: "Liber.Ltd",
        class: "margin-right"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Design",
        background: "LightSlateGrey",
        img: "img/superman.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Design",
        background: "DimGrey",
        img: "img/pic.png",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Design",
        background: "DarkSlateGrey",
        img: "img/47417.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Photography",
        background: "ForestGreen",
        img: "img/Laptop.jpg",
        creator: "Liber.Ltd",
        class: "margin-right"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Photography",
        background: "DarkOliveGreen",
        img: "img/bed.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Photography",
        background: "Lime",
        img: "img/codeand.jpg",
        creator: "Liber.Ltd"
    },
    {
        name: "Lorem ipsum sit",
        name2: "dolor sit amet!",
        name3: "amet!",
        type: "Photography",
        background: "SeaGreen",
        img: "img/post3.jpg",
        creator: "Liber.Ltd"
    }
];


class WorkComponent {
    constructor(work) {
        this.work = work;

        this.createElement();
    }

    createElement() {
        this.element = $(`
        <div class="work ${this.work.class} ${this.work.type}" style="background-image: url(${this.work.img});">
            <div>
                <h2>
                    <span>${this.work.name}</span>
                    <span>${this.work.name2}</span>
                    <span>${this.work.name3}</span>
                </h2>
                <p>${this.work.creator}</p>
            </div>
        </div>
        `);
    }
};

class WorkListComponent {
    constructor(workList) {
        this.workList = workList;

        this.createElement();
    }

    createElement() {
        this.element = $(`<div class="workBoxWrapper"></div>`);

        for (let work of this.workList) {
            let liEl = $(`<div></div>`);
            let workComp = new WorkComponent(work);
            liEl.append(workComp.element);
            this.element.append(liEl);
        }
    }
};

let comp = new WorkListComponent(workList);
$("div.contWork").append(comp.element);