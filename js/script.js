// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

window.onload = function () {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
};

document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: [
            "Artificial Intelligence",
            "Data Science",
            "Machine Learning",
            "Cyber Security",
            "DevOps",
        ],
        typeSpeed: 100, // Speed of typing
        backSpeed: 50,  // Speed of backspacing
        backDelay: 1000, // Delay before deleting
        startDelay: 500, // Initial delay before typing starts
        loop: true,  // Keep looping through the texts
        showCursor: true,  // Show blinking cursor
        cursorChar: "|", // Cursor character
    };
    var typed = new Typed("#typing-text", options);
});


//
//toggle theme
