const musica = document.querySelector("#Musica");
const festival = document.querySelector("#Festival");
const arte = document.querySelector("#Arte");
const sport = document.querySelector("#Sport");
const tempo = document.querySelector("#Tempo");
const altro = document.querySelector("#Altro");

const navButtons = [musica, festival, arte, sport, tempo, altro];

for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", modalNav);
}

const modal = document.querySelector("#modal-nav-desktop");
modal.addEventListener("blur", closeModalNav);

const navBox = document.createElement("div");
navBox.classList.add("nav-box");
const discoverMore = document.createElement("h2");
discoverMore.innerHTML = "Scoprire </br> di più";

function closeModalNav(event) {
    modal.innerHTML = "";
    navBox.innerHTML = "";
    modal.classList.add('hidden');
    for(let i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("click", modalNav);
        navButtons[i].classList.add('nav-b-hover');
        navButtons[i].classList.remove('nav-b-inactive');
        navButtons[i].classList.remove('nav-b-active');
    }   

}

function modalNav(event) {

    modal.classList.remove('hidden');
    modal.focus();
    for(let i = 0; i < navButtons.length; i++) {
        navButtons[i].removeEventListener("click", modalNav);
        navButtons[i].classList.remove('nav-b-hover');
        navButtons[i].classList.add('nav-b-inactive');
    }
    event.target.classList.add('nav-b-active');

    if(event.target === navButtons[0]) {
        modalMusic();
    }else if(event.target === navButtons[1]) {
        modalFestival();
    }else if(event.target === navButtons[1]) {
        modalArte();
    }else if(event.target === navButtons[1]) {
        modalFestival();
    }else if(event.target === navButtons[1]) {
        modalFestival();
    }else if(event.target === navButtons[1]) {
        modalFestival();
    }

}

function modalFestival() {

    modal.appendChild(navBox);
    discoverMore.classList.add("nav-title");
    navBox.appendChild(discoverMore);

    let navList = [];
    for (let i = 0; i < 4; i++) {
        navList[i] = document.createElement("div");
        navList[i].classList.add("nav-list");
    }

    let navElements = [];
    for (let i = 0; i < 16; i++) {
        navElements[i] = document.createElement("a");
        navElements[i].href = "#";
    }

    for(let i = 0; i < 4; i++) {
        navBox.appendChild(navList[i]);
        switch(i) {
            case 0:
                navElements[0].textContent = "Festival Blues";
                navList[0].appendChild(navElements[0]);
                navElements[1].textContent = "Festival culturali";
                navList[0].appendChild(navElements[1]);
                navElements[2].textContent = "Festival Dance Elettronica";
                navList[0].appendChild(navElements[2]);
                navElements[3].textContent = "Festival del cinema";
                navList[0].appendChild(navElements[3]);
                break;
            case 1:
                navElements[4].textContent = "Festival di arte/cultura";
                navList[1].appendChild(navElements[4]);
                navElements[5].textContent = "Festival di comicità";
                navList[1].appendChild(navElements[5]);
                navElements[6].textContent = "Festival di musica classica";
                navList[1].appendChild(navElements[6]);
                navElements[7].textContent = "Festival di teatro";
                navList[1].appendChild(navElements[7]);
                break;
            case 2:
                navElements[8].textContent = "Festival Jazz";
                navList[2].appendChild(navElements[8]);
                navElements[9].textContent = "Festival musicali";
                navList[2].appendChild(navElements[9]);
                navElements[10].textContent = "Festival per bambini";
                navList[2].appendChild(navElements[10]);
                navElements[11].textContent = "Festival per studenti";
                navList[2].appendChild(navElements[11]);
                break;
            case 3:
                navElements[12].textContent = "Festival sportivi";
                navList[3].appendChild(navElements[12]);
                navElements[13].textContent = "Festival Rock/Pop";
                navList[3].appendChild(navElements[13]);
                navElements[14].textContent = "Altri - Festival";
                navList[3].appendChild(navElements[14]);
                navElements[15].textContent = "Tutti Festival ➔";
                navElements[15].classList.add("all-category");
                navList[3].appendChild(navElements[15]);
                navElements[15].classList.add("all-category");
                navList[3].appendChild(navElements[15]);
                break;
            default:
                break;
        }
    }
}