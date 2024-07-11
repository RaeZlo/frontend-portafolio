const panels = document.querySelectorAll('.panel');
let currentIndex = 0;

function activateNextPanel() {
    removeActiveClasses();
    panels[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % panels.length;
}

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

setInterval(activateNextPanel, 2000);

// Inicializa el primer panel activo
activateNextPanel();

/*
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
*/