
import { bannerClose } from './elements.js';
import { banner } from './elements.js';
import { logo } from './elements.js';
import { menu } from './elements.js';
import { menuBar } from './elements.js';
import { navLinks } from './elements.js';



if (sessionStorage.getItem("activeLink") !== null) {
    navLinks.forEach((value) => {
        if (value.className === sessionStorage.getItem("activeLink")) {
            value.classList.add("active-nav-link");
        }
    });
    
}


logo.addEventListener('click', (ev) => {
    sessionStorage.clear();
});


bannerClose.addEventListener('click', (ev) => {
    banner.style.position = "absolute";
    banner.style.left = "-100%";
});


// menu should toggle navigation pane and clicking body should hide it.
menu.addEventListener('click', (ev) => {

    if (menuBar.classList.contains("tl1")) {
        // hide
        menuBar.classList.remove("tl1");
        document.body.style.backgroundColor = "unset";
        document.body.style.overflow = "unset";
        menu.innerHTML = "menu";
    } else {
        // show
        menuBar.classList.add("tl1");
        
        document.body.style.overflow = "hidden";
        menu.innerHTML = bannerClose.innerHTML;
        document.body.style.backgroundColor = "#bbb";
    }

});


navLinks.forEach((value) => {
    value.addEventListener('click', (ev) => {
        sessionStorage.setItem("activeLink", value.className);
    });
});



// Fetching resources using the Fetch API

const request = new Request("https://luisZ732.pythonanywhere.com/api/predictions/");

const myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors'
}

const response = await fetch(request, myInit);

if (response.ok) {
    console.log(`data was received`);
    const data = await response.json();
    console.log(`Data:\n${data}`);
} else {
    console.log(`error during request`);
    request.headers.forEach((value) => {
        console.log(`${value}\n`);
    });
}

