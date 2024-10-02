import loadHomePageTo from "./home_page";
import loadContactTo from "./contact_page";
import loadMenuTo from "./menu_page";
import { glueFunction } from "./helper_function";


// Selectors
const contactButton = document.querySelector('#contact_button');
const homeButton = document.querySelector('#home_button');
const menuButton = document.querySelector('#menu_button');

// HTML target for display
const contentIdDiv = document.querySelector('#content');

// Add functionality to tab buttons
glueFunction('click', homeButton, loadHomePageTo, contentIdDiv);
glueFunction('click', contactButton, loadContactTo, contentIdDiv);
glueFunction('click', menuButton, loadMenuTo, contentIdDiv);

// Display initial page: home
loadHomePageTo(contentIdDiv);













