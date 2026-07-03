// Typing Animation

const text = [
"Web Developer",
"AI & Data Science Student",
"Frontend Enthusiast",
"UI Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

if (count === text.length) {  
    count = 0;  
}  

currentText = text[count];  
letter = currentText.slice(0, ++index);  

document.querySelector(".typing").textContent = letter;  

if (letter.length === currentText.length) {  

    setTimeout(() => {  
        index = 0;  
        count++;  
        type();  
    }, 1500);  

} else {  

    setTimeout(type, 120);  

}

})();

// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

const header = document.querySelector("header");  

if (window.scrollY > 50) {  
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";  
} else {  
    header.style.boxShadow = "none";  
}

});

// Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {  

    if (entry.isIntersecting) {  
        entry.target.style.opacity = "1";  
        entry.target.style.transform = "translateY(0)";  
    }  

});

});

sections.forEach(section => {

section.style.opacity = "0";  
section.style.transform = "translateY(50px)";  
section.style.transition = "1s";  

observer.observe(section);

});
Itha enga podrathu