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
            distance.top >= 0 &&
            distance.left >= 0 &&
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


        
    };
};



// Add class 'active' to section when near top of viewport


buildNav();



// Scroll to anchor ID using scrollTO event

function scroll(e) {
    e.preventDefault()

    const clicked = document.querySelector('#' + e.target.dataset["section"]);

    clicked.scrollIntoView({
        block: "start",
        alignToTop: true,
        behavior: "smooth"
    });
}

    const highlights = document.querySelector("li");
    highlights.forEach((element) => {
        if (element.childNodes[0].dataset === e.target.dataset && Viewport) {
            element.classList.add("link__active");
        } else {
            element.classList.remove("link__remove");
        }
    });

    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


