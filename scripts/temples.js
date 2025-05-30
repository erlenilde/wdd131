document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});

const menuButton = document.getElementById('menuButton');
const mainMenu = document.getElementById('mainMenu');

menuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});