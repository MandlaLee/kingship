const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* THRIVE FORM */

const bookingForm = document.getElementById("booking-form");
const successPopup = document.getElementById("success-popup");
const closePopup = document.getElementById("close-popup");

if(bookingForm){

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        successPopup.style.display = "flex";

        bookingForm.reset();
    });

}

if(closePopup){

    closePopup.addEventListener("click", () => {

        successPopup.style.display = "none";

    });

}
/* CHOIR FORM */

const choirForm = document.getElementById("choir-form");
const choirPopup = document.getElementById("choir-popup");
const closeChoirPopup = document.getElementById("close-choir-popup");

if(choirForm){

    choirForm.addEventListener("submit", (e) => {

        e.preventDefault();

        choirPopup.style.display = "flex";

        choirForm.reset();

    });

}

if(closeChoirPopup){

    closeChoirPopup.addEventListener("click", () => {

        choirPopup.style.display = "none";

    });

}
/* NETWORK FORM */

const networkForm = document.getElementById("network-form");
const networkPopup = document.getElementById("network-popup");
const closeNetworkPopup = document.getElementById("close-network-popup");

if(networkForm){

    networkForm.addEventListener("submit", (e) => {

        e.preventDefault();

        networkPopup.style.display = "flex";

        networkForm.reset();

    });

}

if(closeNetworkPopup){

    closeNetworkPopup.addEventListener("click", () => {

        networkPopup.style.display = "none";

    });

}
/* UNI THRIVE FORM */

const uniForm = document.getElementById("uni-form");
const uniPopup = document.getElementById("uni-popup");
const closeUniPopup = document.getElementById("close-uni-popup");

if(uniForm){

    uniForm.addEventListener("submit", (e) => {

        e.preventDefault();

        uniPopup.style.display = "flex";

        uniForm.reset();

    });

}

if(closeUniPopup){

    closeUniPopup.addEventListener("click", () => {

        uniPopup.style.display = "none";

    });

}

/* COUNTDOWN TIMER */

const countdownDate = new Date("June 28, 2026 18:00:00").getTime();

const countdownFunction = setInterval(() => {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if(daysEl){

        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = seconds;

    }

    if(distance < 0){

        clearInterval(countdownFunction);

    }

}, 1000);

/* CONTACT FORM */

const contactForm = document.getElementById("contact-form");
const contactPopup = document.getElementById("contact-popup");
const closeContactPopup = document.getElementById("close-contact-popup");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        contactPopup.style.display = "flex";

        contactForm.reset();

    });

}

if(closeContactPopup){

    closeContactPopup.addEventListener("click", () => {

        contactPopup.style.display = "none";

    });

}

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});
