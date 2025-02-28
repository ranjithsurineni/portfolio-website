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
            "AI Engineer",
            "Data Scientist",
            "Machine Learning Engineer",
            "Cyber Security Analyst",
            "DevOps Engineer",
        ],
        typeSpeed: 90, // Speed of typing
        backSpeed: 50,  // Speed of backspacing
        backDelay: 1200, // Delay before deleting
        startDelay: 600, // Initial delay before typing starts
        loop: true,  // Keep looping through the texts
        showCursor: true,  // Show blinking cursor
        cursorChar: "|", // Cursor character
    };
    var typed = new Typed("#typing-text", options);
});


//
//toggle theme
document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const theme = this.getAttribute("data-value");
            changeTheme(theme);
            // Update dropdown button text to selected option
            document.getElementById("themeDropdown").innerText = this.innerText;
        });
    });
});

const videoSources = {
    "video-1": "images/techgreen.mp4",
    "video-2": "images/techred.mp4",
    "video-3": "images/goku.mp4"
};

const imageSources = {
    "image-1": "images/tech01.jpg",
    "image-2": "images/img2.jpg"
};

function changeTheme(theme) {
    // Remove any existing video
    const existingVideo = document.getElementById("background-video");
    if (existingVideo) {
        existingVideo.remove();
    }
    // Clear any image background styling
    document.body.style.background = "";

    if (videoSources[theme]) {
        const video = document.createElement("video");
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "");
        video.setAttribute("loop", "");
        video.id = "background-video";
        Object.assign(video.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1"
        });
        const source = document.createElement("source");
        source.src = videoSources[theme];
        source.type = "video/mp4";
        video.appendChild(source);
        document.body.appendChild(video);
    } else if (imageSources[theme]) {
        document.body.style.background = "url('" + imageSources[theme] + "') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    }
}
