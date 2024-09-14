// script.ts

let skillsVisible = true;
let experienceVisible = true;

document.getElementById("toggle-skills")!.addEventListener("click", () => {
    const skillsSection = document.getElementById("skills");
    if (skillsVisible) {
        skillsSection!.style.display = "none";
        skillsVisible = false;
    } else {
        skillsSection!.style.display = "block";
        skillsVisible = true;
    }
});

document.getElementById("toggle-experience")!.addEventListener("click", () => {
    const experienceSection = document.getElementById("experience");
    if (experienceVisible) {
        experienceSection!.style.display = "none";
        experienceVisible = false;
    } else {
        experienceSection!.style.display = "block";
        experienceVisible = true;
    }
});