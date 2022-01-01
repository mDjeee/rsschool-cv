let cube = document.querySelector(".image-cube");

let btnHome = document.getElementById("home");
let btnExperience = document.getElementById("experience");
let btnEducation = document.getElementById("education");
let btnProjects = document.getElementById("projects");
let btnSkills = document.getElementById("skills");
let btnContacts = document.getElementById("contacts");

let audio = new Audio("icon2.mp3");

audio.oncanplaythrough = function(){
audio.play();
}

window.onload = function() {
    cube.style.transform = `rotateY(${-360}deg) rotateX(${360}deg) scale(${1.5})`;
    
    setTimeout(() => {
        cube.style.transform = `rotateY(${90}deg) rotateX(${-360}deg) scale(${1})`;
        setTimeout(() => {
            cube.style.transform = `rotateX(${90}deg)`;
            setTimeout(() => {
                cube.style.transform = `rotateX(${270}deg) rotateZ(${360}deg)`;
                setTimeout(() => {
                    cube.style.transform = `rotateX(${0}deg) rotateY(${180}deg) scale(${1.8})`;
                    setTimeout(() => {
                        cube.style.transform = `rotateY(${180}deg) scaleX(${0.5})`;
                        setTimeout(() => {
                            cube.style.transform = `rotateX(${0}deg) rotateY(${0}) rotateZ(${0}) scale(${1.5})`;
                        }, 1000);
                    }, 1000)
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

    setTimeout(() => {cube.style.transform = `rotateX(${360}deg) rotateY(${360}deg) scale(${1})`}, 7300);

    setTimeout(() => {cube.style.transition = `${2}s`}, 9000);
}


btnHome.addEventListener("click", () => {
    cube.style.transform = `rotateY(${0}deg)`;
});

btnExperience.addEventListener("click", () => {
    cube.style.transform = `rotateY(${-90}deg)`;
});

btnEducation.addEventListener("click", () => {
    cube.style.transform = `rotateY(${-180}deg)`;
});

btnProjects.addEventListener("click", () => {
    cube.style.transform = `rotateY(${-270}deg)`;
});

btnSkills.addEventListener("click", () => {
    cube.style.transform = `rotateX(${+90}deg)`;
});

btnContacts.addEventListener("click", () => {
    cube.style.transform = `rotateX(${-90}deg)`;
});
