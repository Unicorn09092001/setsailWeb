

setTimeout(() => {
    var widthHeader = document.querySelector('.header').clientWidth;
        document.querySelector('#nav-element .menu__dropdown').style.width = widthHeader + 'px';
        document.querySelector('#nav-element .menu__dropdown').style.left = '-' + document.querySelector('#nav-element').offsetLeft + 'px';
    
    window.addEventListener('resize', function() {
        widthHeader = document.querySelector('.header').clientWidth;
        document.querySelector('#nav-element .menu__dropdown').style.width = widthHeader + 'px';
        document.querySelector('#nav-element .menu__dropdown').style.left = '-' + document.querySelector('#nav-element').offsetLeft + 'px';
    })
}, 100);

// modal search
const searchBtn = document.querySelector('.nav__icon-search');
const modalSearch = document.querySelector('.modal-search');
const closeSearchBtn = document.querySelector('.modal-search__btn-close');

searchBtn.onclick = function(){
    modalSearch.style.display = 'block';
}

closeSearchBtn.onclick =  function() {
    modalSearch.style.display = 'none';
};

// modal bars
const barsBtn = document.querySelector('.nav__icon-bars:not(.nav__bars)');
const modalBars =  document.querySelector('.modal-bars');
const closeBarsBtn = document.querySelector('.modal-bars__btn-close');

barsBtn.onclick = function() {
    modalBars.style.display = 'block';
    modalBars.style.animation = 'TranslateXAppear ease-in 0.35s'
}

closeBarsBtn.onclick = function() {
    modalBars.style.animation = 'TranslateXHide ease-in 0.35s'
    setTimeout(() => {
        modalBars.style.display = 'none';
    }, 350);  
}

// Header Nav

const navItemTexts = ['Home', 'Pages', 'Destinations', 'Tuors', 'Blog', 'Shop', 'Elements'];
const dropdownTextList= [
    [
        'Travel Agency','Winter Holidays','Exotic Destinations','Summer Holidays','City Tours',
        'New Year Trips','Destinations Carousel','Wine Tours','Vacation Showcase','Landing'
    ],
    [
        'About Us', 'What We Offer', 'Our Team', 'Get In Touch', 'Contact Us', 'FAQ Page',
        'Coming Soon','Error Page'
    ],
    [
        'Destination List',
        'Destination Slider',
        'Destination Item'
    ],
    [
        'Standard List',
        'Gallery List',
        'Split List',
        'Tour Item'
    ],
    [   
        'Blog Masonry',
        'Blog Standard',
        'Post Types'
    ],
    [
        'Product List',
        'Product Single',
        'Shop Layouts',
        'Shop Pages'
    ],
    [
        'Featured', 
        'Presentation', 
        'Classic', 
        'Typography'
    ]
];

const navMenuItems = document.querySelectorAll('.nav__menu .nav__menu-item');
const navMenuItemsMobile = document.querySelectorAll('.nav__menu-mobile .nav__menu-item');

navItemTexts.forEach(function(navItemText, index) {
    var htmls = `
        <a href="#" class="nav-item__link">
            <span class="nav-item-text">${navItemText}</span>
        </a>
        <i class="dropdown-icon fas fa-angle-right"></i>
        <ul class="menu__dropdown"></ul>
    `;
    navMenuItems[index].innerHTML = htmls;
    navMenuItemsMobile[index].innerHTML = htmls;
})



const dropdownMenus = document.querySelectorAll('.nav__menu .menu__dropdown');
const dropdownMenusMobile = document.querySelectorAll('.nav__menu-mobile .menu__dropdown');

dropdownTextList.forEach(function(dropdownTexts, index) {
    dropdownTexts.forEach(function(dropdownText) {
        var htmls = `
            <li class="dropdown__item">
                <div class="abc">
                    <a href="#" class="dropdown__item-link">
                        <span class="dropdown__item-text">${dropdownText}</span>
                    </a>
                    <i class="dropdown-icon fas fa-angle-right"></i>
                </div>
            </li>
        `;
        dropdownMenus[index].innerHTML += htmls;
        dropdownMenusMobile[index].innerHTML +=htmls;
    })
})


const dropdown2TextList = [
    [
        'Right Sidebar',
        'Left Sidebar',
        'Without Sidebar'
    ],
    [
        'Standard',
        'Gallery',
        'Link',
        'Quote',
        'Video',
        'Audio',
        'No Sidebar'
    ],
    [
        'Three Columns',
        'Four Columns',
        'Full Width'
    ],
    [
        'My account',
        'Cart',
        'Checkout'
    ],
    [
        'Tour List',
        'Tour Carousel',
        'Tours Filter',
        'Destination With Tours',
        'Destination List',
        'Destination Fullscreen Slider',
        'Fullscreen Sections',
        'Reviews Carousel'
    ],
    [
        'Team',
        'Blog List',
        'Shop List',
        'Testimonials',
        'Banner',
        'Clients',
        'Parallax Section',
        'Video Button'
    ],
    [
        'Accordions',
        'Tabs',
        'Buttons',
        'Google Maps',
        'Contact Form',
        'Progress Bar',
        'Countdown',
        'Counters',
        'Call To Action'
    ],
    [
        'Headings',
        'Columns',
        'Section Title',
        'Blockquote',
        'Dropcaps',
        'Highlights',
        'Icon with text',
        'Separators',
        'Custom Font'
    ],
];

const dropdown2ItemNames = ['Blog Standard', 'Post Types', 'Shop Layouts', 'Shop Pages',
                            'Featured', 'Presentation', 'Classic', 'Typography'];
const dropdown2 = document.querySelectorAll('.dropdown .menu__dropdown .dropdown__item')

Array.from(dropdown2).forEach(function(Item) {
    dropdown2ItemNames.forEach(function(dropdown2ItemName) {
        if(Item.innerText.trim() === dropdown2ItemName) {
            Item.classList.add('dropdown');
        }
    })
})

Array.from(document.querySelectorAll('.dropdown__item.dropdown')).forEach(function(dropdown2Item) {
    var htmls = `
        <ul class="menu__dropdown-1"></ul>
    `;
    dropdown2Item.innerHTML += htmls;
})

const dropdown2Items = document.querySelectorAll('.nav__menu .menu__dropdown-1');
const dropdown2ItemsMobile = document.querySelectorAll('.nav__menu-mobile .menu__dropdown-1');

dropdown2TextList.forEach(function(dropdown2Texts, index) {
    dropdown2Texts.forEach(function(dropdown2Text) {
        var htmls =  `
            <div class="abc">
                <a href="#" class="dropdown__item-link">
                    <span class="dropdown__item-text">${dropdown2Text}</span>
                </a>
            </div>
        `;
        dropdown2Items[index].innerHTML += htmls;
        dropdown2ItemsMobile[index].innerHTML += htmls;
    })
})


// Modal bars-Mobil

var isOpenbarMobil = true;

document.querySelector('.nav__bars').addEventListener('click', function() {
    if(isOpenbarMobil) {
        document.querySelector('.nav__menu-mobile').style.display = 'block';
        isOpenbarMobil = false;
    } else {
        document.querySelector('.nav__menu-mobile').style.display = 'none';
        isOpenbarMobil = true;
    }
});

myfunction();
function myfunction() {
    document.querySelector('.nav__menu-mobile').onclick = function(e) {
        if(e.target === document.querySelector('.nav__menu-mobile')) {
             removeDropdow();
             document.querySelector('.nav__menu-mobile').style.height = '292px'
        }
     } 
     Array.from(navMenuItemsMobile).forEach(function(navMenuItem) {
         navMenuItem.addEventListener('click', function(e) {
             document.querySelector('.nav__menu-mobile').style.height = '342px';
             if(e.target === document.querySelector('.Item--current')) {
                 removeDropdow();
                 document.querySelector('.nav__menu-mobile').style.height = '292px'
             } else {
                 removeDropdow();
                 navMenuItem.classList.add('Item--current');
                 document.querySelector('.Item--current .menu__dropdown').style.display = 'block';
                 document.querySelector('.Item--current > .dropdown-icon').classList.remove('fa-angle-right');
                 document.querySelector('.Item--current > .dropdown-icon').classList.add('fa-angle-down');
             }
         })
     }) 
    
     function removeDropdow() {
         Array.from(navMenuItemsMobile).forEach(function(navMenuItem) {
             navMenuItem.classList.remove('Item--current');
             navMenuItem.querySelector('.menu__dropdown').style.display = 'none';
             navMenuItem.querySelector('.dropdown-icon').classList.add('fa-angle-right');
             navMenuItem.querySelector('.dropdown-icon').classList.remove('fa-angle-down');
         })
     }
     
     Array.from(document.querySelectorAll('.nav__menu-mobile .dropdown__item.dropdown')).forEach(function(dropdown) {
         dropdown.addEventListener('click', function(e) {
             if(e.target === document.querySelector('.dropdown--current .abc')) {
                 removeDropdown1();
             } else {
                 removeDropdown1();
                 dropdown.classList.add('dropdown--current');
                 document.querySelector('.dropdown--current .menu__dropdown-1').style.display = 'block';
                 document.querySelector('.dropdown--current .dropdown-icon').classList.remove('fa-angle-right');
                 document.querySelector('.dropdown--current .dropdown-icon').classList.add('fa-angle-down');
             }
         })
     })
     
     function removeDropdown1() {
         Array.from(document.querySelectorAll('.nav__menu-mobile .dropdown__item.dropdown')).forEach(function(dropdown) {
             dropdown.classList.remove('dropdown--current');
             dropdown.querySelector('.menu__dropdown-1').style.display = 'none';
             dropdown.querySelector('.dropdown-icon').classList.remove('fa-angle-down');
             dropdown.querySelector('.dropdown-icon').classList.add('fa-angle-right');
         })
     }
}

/*----------------------- Modal Login-Register ------------------- */

modalLoginRegister()
function modalLoginRegister() {
    const userBtn = document.querySelector('.nav__user .nav__btn-icon');
        
        userBtn.onclick = function() {
            document.querySelector('.modal-user').style.display = 'block';
            document.querySelector('.modal--login').style.display = 'block';
        }
    
        const loginBtn = document.querySelectorAll('.modal__login')[1];
        const registerBtn = document.querySelector('.modal__register');
        
        loginBtn.onclick = function() {
            document.querySelector('.modal--login').style.display = 'block';
            document.querySelector('.modal--register').style.display = 'none';
        }
        
        registerBtn.onclick = function() {
            document.querySelector('.modal--login').style.display = 'none';
            document.querySelector('.modal--register').style.display = 'block';
        }
}

