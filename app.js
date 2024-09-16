
//   hamburger menu

let sidemenu = document.querySelector(".sidemenu");
let openmenu = document.querySelector(".openmenu");
let closemenu = document.querySelector(".closemenu");
let ClimateLink = document.querySelector(".Climate-link");
let PortFolioLink = document.querySelector(".PortFolio-link");
let StayHavenLink = document.querySelector(".StayHaven-link");
let StayHavenLive = document.querySelector(".StayHaven-live");
let ClimateLive = document.querySelector(".Climate-live");
let PortFolioLive = document.querySelector(".PortFolio-live");

openmenu.addEventListener("click", ()=> {
    sidemenu.style.right = "0";
})

closemenu.addEventListener("click", ()=> {
    sidemenu.style.right = "-200px";
})

let Home = document.querySelector(".Home");
let About = document.querySelector(".About");
let Resume = document.querySelector(".Resume");
let Projects = document.querySelector(".Projects");
let Contacts = document.querySelector(".Contacts");

let navli = document.querySelector("nav li");

let arrtab = [Home, About, Resume, Projects, Contacts];

arrtab.forEach(tab => {
    tab.addEventListener("click", () => {
        sidemenu.style.right = "-200px";
        navli.style.color = "#fff";
    });
});


ClimateLink.addEventListener("click", () => {
    window.open('https://github.com/DattaRahegaonkar/Climate-Cast','_black');
})

ClimateLive.addEventListener("click", () => {
    window.open('https://climatecast67.netlify.app/','_black');
})

PortFolioLink.addEventListener("click", () => {
    window.open('https://github.com/DattaRahegaonkar/PortFolio','_black');
})

PortFolioLive.addEventListener("click", () => {
    window.open('https://dattarahegaonkarportfolio.netlify.app/','_black');
})

StayHavenLink.addEventListener("click", () => {
    window.open('https://github.com/DattaRahegaonkar/StayHaven','_black');
})

StayHavenLive.addEventListener("click", () => {
    window.open('https://stayhaven-u6tg.onrender.com/stayhaven','_black');
})