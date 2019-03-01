let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let project = document.querySelector(".projects");

function aboutMe() {
  skills.style.display = "none";
  project.style.display = "none";

  about.style.display = "block";
}

function mySkills() {
  project.style.display = "none";
  about.style.display = "none";

  skills.style.display = "block";
}

function myProjects() {
  skills.style.display = "none";
  about.style.display = "none";

  project.style.display = "block";
}

aboutMe();
