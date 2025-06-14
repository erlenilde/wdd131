const cards = document.querySelector('#cards');

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, RJ, Brazil",
        dedicated: "2022, May, 8",
        area: 2784,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
    },
    {
        templeName: "Sao Paulo Brazil",
        location: "Sao Paulo, SP, Brazil",
        dedicated: "1978, October, 30",
        area: 5504,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, SP, Brazil",
        dedicated: "2002, April, 20",
        area: 4469,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
    },
    // Add more temple objects here...
];

const displayTemples = (temples) => {
    cards.innerHTML = '';
    temples.forEach((temple) => {
        let card = document.createElement('section');
        let templename = document.createElement('h2');
        let portrait = document.createElement('img');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let size = document.createElement('p');

        templename.textContent = `${temple.templeName}`
        location.textContent = `Location: ${temple.location}`
        dedicated.textContent = `Dedicated: ${temple.dedicated}`
        size.textContent = `Size: ${temple.area}`


        portrait.setAttribute('src', temple.imageUrl);
        portrait.setAttribute('alt', `temple of ${temple.templeName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '400');
        portrait.setAttribute('height', '250');

        card.appendChild(templename);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

console.log("Templos carregados:", temples.length);
displayTemples(temples)

const showOldTemples = document.querySelector("#old");
const showNewTemples = document.querySelector("#new");
const showLargeTemples = document.querySelector("#large");
const showSmallTemples = document.querySelector("#small");

showOldTemples.addEventListener("click", (e) => {
  e.preventDefault();
  let oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
  displayTemples(oldTemples);
});

showNewTemples.addEventListener("click", (e) => {
  e.preventDefault();
  let newTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
  displayTemples(newTemples);
});

showLargeTemples.addEventListener("click", (e) => {
  e.preventDefault();
  let largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

showSmallTemples.addEventListener("click", (e) => {
  e.preventDefault();
  let smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

/*function clearCards() {
    cards.innerHTML = '';
  }

function showOldTemples() {
    clearCards();
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
    displayTemples(oldTemples);
  }
  
function showNewTemples() {
    clearCards();
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
    displayTemples(newTemples);
  }
  
function showLargeTemples() {
    clearCards();
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
  }
  
function showSmallTemples() {
    clearCards();
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
  }

document.querySelector('#old').addEventListener('click', showOldTemples);
document.querySelector('#new').addEventListener('click', showNewTemples);
document.querySelector('#large').addEventListener('click', showLargeTemples);
document.querySelector('#small').addEventListener('click', showSmallTemples);
  
displayTemples(temples)*/

