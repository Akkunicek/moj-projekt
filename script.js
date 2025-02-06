let noClickCount = 0;

const backgroundMusic = document.getElementById('backgroundMusic');
const yesMusic = document.getElementById('yesMusic');
const noMusic = document.getElementById('noMusic');

// Automatické prehrávanie hudby po otvorení stránky s kontrolou chyby
window.onload = () => {
    backgroundMusic.volume = 0.5;

    // Povolenie hudby po prvej interakcii používateľa
    document.body.addEventListener('click', enableSound, { once: true });
};

// Povolenie prehrávania po interakcii, ak automaticky neprehráva
function enableSound() {
    backgroundMusic.play().catch(err => {
        console.log("Hudba sa nespustila automaticky. Kliknutím povolte hudbu.");
    });
}

function selectOption(choice) {
    // Zastav všetky zvuky
    backgroundMusic.pause();
    yesMusic.pause();
    noMusic.pause();

    if (choice === "Ano") {
        yesMusic.currentTime = 0;
        yesMusic.play().catch(err => console.error("Nepodarilo sa prehrať hudbu:", err));
        document.querySelector("img").src = "img/hai.gif";
        document.querySelector("h1").textContent = "Ja som to vedel 😎🤙";
        document.querySelector("h2").textContent = "Budem sa tešiť na";
        document.querySelector("h3").textContent = "14.2";
        document.querySelector(".tlacitko").style.display = "none";
    } else {
        noClickCount++;
        noMusic.currentTime = 0;
        noMusic.play().catch(err => console.error("Nepodarilo sa prehrať hudbu:", err));

        let image = document.querySelector("img");
        let heading1 = document.querySelector("h1");
        let heading2 = document.querySelector("h2");
        let heading3 = document.querySelector("h3");
        let buttonNo = document.getElementById("nie");

        if (noClickCount === 1) {
            image.src = "img/sad1.avif";
            heading1.textContent = "Môžeš si to ešte rozmyslieť";
            heading2.textContent = "Pjosím";
            heading3.textContent = "😢";
        } else if (noClickCount === 3) {
            image.src = "img/sad2.avif";
            heading1.textContent = "PRECO STLACAS NIE?";
            heading2.textContent = "Fnuk Fnuk";
            heading3.textContent = "😭😭😭";
        } else if (noClickCount === 6) {
            image.src = "img/cute-sad.gif";
            heading1.textContent = "Ano ?";
            heading2.textContent = "";
            heading3.textContent = "";
        }

        // Presun tlačidla Nie na náhodné miesto
        let maxX = window.innerWidth - buttonNo.offsetWidth;
        let maxY = window.innerHeight - buttonNo.offsetHeight;
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);
        buttonNo.style.position = "absolute";
        buttonNo.style.left = randomX + "px";
        buttonNo.style.top = randomY + "px";
    }
}
