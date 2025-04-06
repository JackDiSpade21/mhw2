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
        modalMusica();
    }else if(event.target === navButtons[1]) {
        modalFestival();
    }else if(event.target === navButtons[2]) {
        modalArte();
    }else if(event.target === navButtons[3]) {
        modalSport();
    }else if(event.target === navButtons[4]) {
        modalTempo();
    }else if(event.target === navButtons[5]) {
        modalAltro();
    }

}

function modalMusica() {

    modal.appendChild(navBox);
    discoverMore.classList.add("nav-title");
    navBox.appendChild(discoverMore);

    let navList = [];
    for (let i = 0; i < 4; i++) { // 4 colonne
        navList[i] = document.createElement("div");
        navList[i].classList.add("nav-list");
    }

    let navElements = [];
    for (let i = 0; i < 24; i++) { // 24 elementi totali
        navElements[i] = document.createElement("a");
        navElements[i].href = "#";
    }

    for (let i = 0; i < 4; i++) {
        navBox.appendChild(navList[i]);
        switch (i) {
            case 0:
                navElements[0].textContent = "Alternative/Indie Rock";
                navList[0].appendChild(navElements[0]);
                navElements[1].textContent = "Canto Corale";
                navList[0].appendChild(navElements[1]);
                navElements[2].textContent = "Chanson";
                navList[0].appendChild(navElements[2]);
                navElements[3].textContent = "Concerti";
                navList[0].appendChild(navElements[3]);
                navElements[4].textContent = "Concerto di Natale";
                navList[0].appendChild(navElements[4]);
                navElements[5].textContent = "Dance Band";
                navList[0].appendChild(navElements[5]);
                break;
            case 1:
                navElements[6].textContent = "Dance Elettronica";
                navList[1].appendChild(navElements[6]);
                navElements[7].textContent = "Flamenco/Rumba";
                navList[1].appendChild(navElements[7]);
                navElements[8].textContent = "Folk/Country";
                navList[1].appendChild(navElements[8]);
                navElements[9].textContent = "Hard Rock/Metal";
                navList[1].appendChild(navElements[9]);
                navElements[10].textContent = "Hip-hop/R&B";
                navList[1].appendChild(navElements[10]);
                navElements[11].textContent = "Italiano";
                navList[1].appendChild(navElements[11]);
                break;
            case 2:
                navElements[12].textContent = "Jazz/Blues";
                navList[2].appendChild(navElements[12]);
                navElements[13].textContent = "Musica classica";
                navList[2].appendChild(navElements[13]);
                navElements[14].textContent = "Musica contemporanea per adulti";
                navList[2].appendChild(navElements[14]);
                navElements[15].textContent = "Musica religiosa";
                navList[2].appendChild(navElements[15]);
                navElements[16].textContent = "Musica tradizionale";
                navList[2].appendChild(navElements[16]);
                navElements[17].textContent = "Progressive Rock";
                navList[2].appendChild(navElements[17]);
                break;
            case 3:
                navElements[18].textContent = "Reggae";
                navList[3].appendChild(navElements[18]);
                navElements[19].textContent = "Rock/Pop";
                navList[3].appendChild(navElements[19]);
                navElements[20].textContent = "Soul";
                navList[3].appendChild(navElements[20]);
                navElements[21].textContent = "World Music";
                navList[3].appendChild(navElements[21]);
                navElements[22].textContent = "Altri - Musica";
                navList[3].appendChild(navElements[22]);
                navElements[23].textContent = "Tutti Musica";
                navElements[23].classList.add("all-category");
                navList[3].appendChild(navElements[23]);
                break;
            default:
                break;
        }
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