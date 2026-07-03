var typed= new Typed(".text",{
    strings:["Cybersecurity Student", "Game Developer", "Python Programmer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            pageYOffset >= sectionTop - 150 &&
            pageYOffset < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// EmailJS
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_q132c1o",
        "template_y1rhj6g",
        this
    )
    .then(() => {
        
        alert("Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        alert("Failed to send message.");

        console.log(error);

    });

});