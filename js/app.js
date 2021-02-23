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
    const navbarList = document.getElementById("#navbar_list");
    const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    
    


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
        //use the section data-nav to set the navItem title
        navItemLink.textContent = section.dataset.nav;
        //append the link to the navItem
        navItem.appendChild(navItemLink);
        //append the link to navbar
        navbarList.appendChild(navItem);
    };
};

buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


