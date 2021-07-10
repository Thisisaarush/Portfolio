const { body } = document;
const a = document.querySelectorAll('a');
const socialIconsContainer = document.getElementById('social-icons');
const homeContainer = document.getElementById('home-container');
const socialIcons = document.querySelectorAll('.fab');
const themeContainer = document.getElementById('theme-container');
const themeText = document.getElementById('theme-text');
const themeIcon = document.querySelector('.fas');
const navBar = document.getElementById('navigation-container');
const project = document.querySelectorAll('.project');

// Theme Switcher
function switchTheme() {
    if (themeText.textContent === 'Light') {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = 'Dark';
        body.style.background = 'black';
        homeContainer.style.background = 'linear-gradient(to top, #000000, #434343)';
        body.style.color = '#fafafa';

        socialIcons[0].style.color = '#fafafa';
        socialIcons[1].style.color = '#fafafa';
        socialIcons[2].style.color = '#fafafa';
        a[0].style.color = '#fafafa';
        a[1].style.color = '#fafafa';
        a[2].style.color = '#fafafa';
        socialIconsContainer.style.borderColor = '#fafafa'; 

        project[0].style.border = '1px solid white';
        project[1].style.border = '1px solid white';
        project[2].style.border = '1px solid white';
        project[3].style.border = '1px solid white';
        project[4].style.border = '1px solid white';
        project[5].style.border = '1px solid white';
        project[6].style.border = '1px solid white';
        project[7].style.border = '1px solid white';

    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeText.textContent = 'Light';
        homeContainer.style.background = 'linear-gradient(to top, #fffd7d, #ffffff)';
        body.style.background = 'whitesmoke';
        body.style.color = 'black';

        socialIcons[0].style.color = 'black';
        socialIcons[1].style.color = 'black';
        socialIcons[2].style.color = 'black';
        a[0].style.color = 'black';
        a[1].style.color = 'black';
        a[2].style.color = 'black';
        socialIconsContainer.style.borderColor = 'black'; 

        project.style.border = '0px solid white';

    }
}

// Showing Navigation bar on Scroll
let lastScroll = 0;
function navBarOnTop() {
    if (window.scrollY > lastScroll && themeText.textContent === 'Light') {
        navBar.classList.add('navigation-onScrollLight');
        themeContainer.hidden = true;
    } else if (window.scrollY > lastScroll && themeText.textContent === 'Dark') {
        navBar.classList.add('navigation-onScrollDark');
        themeContainer.hidden = true;
    } else if (window.scrollY === 0) {
        navBar.classList.remove('navigation-onScrollLight');
        navBar.classList.remove('navigation-onScrollDark');
        themeContainer.hidden = false;
    }
    lastScroll = window.scrollY;
}

themeIcon.addEventListener('click', switchTheme);
window.addEventListener('scroll', navBarOnTop);