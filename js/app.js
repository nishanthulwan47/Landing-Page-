/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 *  
*/
    const navbarList = document.getElementById("navbar_list");
    const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    //Determine if an element is in viewport

    //Helper functions
   

    // var h1 = document.querySelector('h1');
    // var bounding = h1.getBoundingClientRect();

    // console.log(bounding);
    
    function Viewport (element) {
        const distance = element.getBoundingClientRect();
        return (
            distance.top >= 300 &&
            distance.left >= -300 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {

    for (section of sections) {
        // create the <li> element
        let navItem = document.createElement('li');
        //create the <a> element
        let navItemLink = document.createElement('a');
        navItemLink.className = 'menu__link';

        navItemLink.dataset["section"] = section.id;

        //use the section data-nav to set the navItem title
        navItemLink.textContent = section.dataset.nav;
        //append the link to the navItem
        navItem.appendChild(navItemLink);
        //append the link to navbar
        navbarList.appendChild(navItem);
        //append event listener
        navItem.addEventListener("click", scroll);
        
    };
};



// Add class 'active' to section when near top of viewport

function active() {
    for (section of sections) {
        if (Viewport(section)) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
}




// Scroll to anchor ID using scrollTO event

function scroll(e) {
    e.preventDefault()

    const clicked = document.querySelector('#' + e.target.dataset["section"]);

    clicked.scrollIntoView({
        block: "start",
        alignToTop: true,
        behavior: "smooth"
    });


    const highlight = document.querySelector("li");
    highlight.forEach((elem) => {
        if (elem.childNodes[0].dataset === e.target.dataset && Viewport) {
            elem.classList.add("link__active");
        } else {
            elem.classList.remove("link__remove");
        }
    });
}
    
    buildNav();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.addEventListener('scroll', function() {
    active();
});

// Set sections as active


