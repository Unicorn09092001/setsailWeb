
const slides = [
    {
        image: './assets/img/skiing-slider-img-1.jpg',
        subLabel: 'From Alps',
        mainLabel: 'Snow Adventure',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum amet voluptas magni vitaeratione quae!',
    },
    {
        image: './assets/img/skiing-slider-img-2.jpg',
        subLabel: 'Enjoy Your',
        mainLabel: 'Winter Vacations',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum amet voluptas magni vitaeratione quae!',
    }
]
const slideHTML = document.querySelector('.header__slide-list');
const prevBtn = document.querySelector('.slide__btn-prev');
const nextBtn = document.querySelector('.slide__btn-next');
var slideIndex = 0;

function renderSlide(slide) {
    var htmls = `
        <div class="slide__content slide__content--active" style="background-image: url('${slide.image}');">
            <div class="slide__content-label">
                <span class="content-label__sub">${slide.subLabel}</span>
                <h1 class="content-label__main">${slide.mainLabel}</h1>
            </div>
            <h2 class="slide__content-discription">${slide.discription}</h2>
        </div>
    `;
    slideHTML.innerHTML = htmls;
}

renderSlide(slides[slideIndex]);

prevBtn.onclick = function() {
    if(slideIndex === 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex -= 1;
    }
    renderSlide(slides[slideIndex]);
}

nextBtn.onclick = function() {
    if(slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    renderSlide(slides[slideIndex]);
}

setInterval(() => { 
    if(slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    renderSlide(slides[slideIndex]);
}, 5000);

// ------------ Owl Carousel --------------

const tourList = [
    {
        id : '0',
        image: './assets/img/tour-featured-img-15.jpg',
        title: 'Winter Action',
        price: '$960',
        score: '6.0',
        rating: 'Good',
    },
    {
        id : '1',
        image: './assets/img/tour-featured-img-16.jpg',
        title: 'Magic Of Italy',
        price: '$1000',
        score: '6.7',
        rating: 'Good',
    },
    {
        id : '2',
        image: './assets/img/tour-featured-img-17.jpg',
        title: 'Skiing In Alps',
        price: '$450',
        score: '6.0',
        rating: 'Good',
    },
    {
        id : '3',
        image: './assets/img/tour-featured-img-18.jpg',
        title: 'Snow Surfing',
        price: '$720',
        score: '7.3',
        rating: 'Superb',
    },
    {
        id : '4',
        image: './assets/img/tour-featured-img-19.jpg',
        title: 'Kids Ski School',
        price: '$1600',
        score: '6.7',
        rating: 'Good',
    },
    {
        id : '5',
        image: './assets/img/tour-featured-img-14.jpg',
        title: 'Active Winter',
        price: '$3600',
        score: '7.3',
        rating: 'Superb',
    },
];

const owlCarousel = document.querySelector('.main__tour-list .owl-carousel');


function displayOwl() {
    tourList.forEach(function(tourItem, ) {
        var htmls = `
            <div class="">
                <div class="tour-img-discriber" style="background-image: url(${tourItem.image});">
                </div>
                <div class="tour-standard-top-content">
                    <div class="tour-standard-top-item">
                        <span class="duration-icon"><i class="tour-standard-top-icon far fa-calendar"></i></i>1</span>
                    </div>
                    <div class="tour-standard-top-item">
                        <span class="tour-min-age"><i class="tour-standard-top-icon fas fa-user"></i>13+</span>
                    </div>
                    <div class="tour-standard-top-item">
                        <span class="tour-cat-item">
                            <i class="tour-standard-top-icon fas fa-map-marker-alt"></i>
                            <label for="" class="tour-cat-item-text">Skiing</label>
                        </span>
                    </div>
                </div>
                <div class="tour-standard-inner-content">
                    <div class="tour-title">
                        <a href="#">${tourItem.title}</a>
                    </div>
                    <div class="tour-discription">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing el.… 
                    </div>
                    <div class="tour-price-and-rating">
                        <span class="tour-price">${tourItem.price}</span>
                        <div class="tour-rating">
                            <span class="tour-rating-icon"><i class="fas fa-star"></i></span>
                            <span class="tour-rating-average">${tourItem.score}</span>
                            <span class="tour-rating-discription">${tourItem.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        owlCarousel.innerHTML += htmls;
    })
}
displayOwl();

// Owl-carousel Tour List
$(document).ready(function(){
    $('.main__tour-list .owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            responsive:{
            0:{
                items:1
            },
            680:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1367:{
                items:5
            }
        }
    })
});

setInterval(function() {
    document.querySelector('.main-team-counter').style.top =  document.querySelector('.team-img').clientHeight + 'px'
}, 100)

var counterResultData =  [452,120,283,197];
var counterResults = document.querySelectorAll('.main-team-counter-result');

if(window.scrollY - 500 > document.querySelector('.main-team-inner').offsetTop - document.querySelector('.team-img').clientHeight) {
    Array.from(counterResults).forEach(function(result, index) {
        var count = 0;
        var Counter = setInterval(() => {
            count++;
            result.innerText = count;
            if(count === counterResultData[0]) {
                clearInterval(Counter);
                result.innerText = counterResultData[index];
            }
        }, 1);
        
    })
}


//Owl-carousel Main Review List
const reviewData = [
    {
        image: './assets/img/user-img-1.png',
        title: 'Beautiful Holland',
        content: 'Fo etor uvluoc iwpodit res, vet of nihc egam yubulas. Al uavq ',
        author: 'Carol Silva'
    },
    {
        image: './assets/img/user-img-2.png',
        title: 'Barcelona',
        content: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
        author: 'James Fisher '
    },
    {
        image: './assets/img/user-img-3.png',
        title: 'Kaohsiung',
        content: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
        author: 'Roger Brooks '
    },
    {
        image: './assets/img/user-img-4.png',
        title: 'Taipei',
        content: 'Pe utor aviuas lwpadit tas, vut et nihc egam yubulas. Si euvy ',
        author: 'Susan Day'
    },
    {
        image: './assets/img/user-img-5.png',
        title: 'Tarragona',
        content: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
        author: 'Carl Moore '
    },
    {
        image: './assets/img/user-img-6.png',
        title: 'Madrid',
        content: 'Pe ator eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
        author: 'Sam Smith '
    },
    {
        image: './assets/img/user-img-7.png',
        title: 'Holland Canals',
        content: 'Sa etor aviues lmpedlt tes, vof ef nihc agem qupaios. Ai apvy ',
        author: 'Ema Cooper '
    },
]

reviewData.forEach(function(review) {
    var htmls = ` 
        <div class="review-item item">
            <img src="${review.image}" alt="" class="review__item-avatar">
            <div class="review__item-wrap">
                <div class="review__item-title">
                    <a href="">${review.title}</a>
                </div>
                <div class="review__item-star">
                    <span class="review__item-star-icon">
                        <i class="fas fa-star"></i>
                    </span>
                    <span class="review__item-star-icon">
                        <i class="fas fa-star"></i>
                    </span>
                    <span class="review__item-star-icon">
                        <i class="fas fa-star"></i>
                    </span>
                    <span class="review__item-star-icon">
                        <i class="fas fa-star"></i>
                    </span>
                    <span class="review__item-star-icon">
                        <i class="fas fa-star"></i>
                    </span>
                </div>
                <div class="review__item-content">${review.content}</div>
                <div class="review__item-author">${review.author}</div>
            </div>
        </div>
    `;
    document.querySelector('.main__review .owl-carousel').innerHTML += htmls;
})

$(document).ready(function(){
    $('.main__review .owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        responsive:{
        0:{
            items:1
        },
        681:{
            items:2
        },
        768:{
            items:3
        }
    }
})
});


$(document).ready(function(){
    $('.main-team-inner .owl-carousel').owlCarousel({
        loop:true,
        
        responsive:{
        0:{
            items:1
        },
        681:{
            items:2
        },
        769:{
            items:3
        },
        1025:{
            items:4
        }
    }
})
});
