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
        document.querySelector(".home").style.background = `transparent`;
        document.querySelector(".experience").style.background = `transparent`;
        document.querySelector(".education").style.background = `transparent`;
        document.querySelector(".skills").style.background = `transparent`;
        document.querySelector(".projects").style.background = `transparent`;
        document.querySelector(".contacts").style.background = `transparent`;
        setTimeout(() => {
            cube.style.transform = `rotateX(${90}deg)`;
            document.querySelector(".home").style.background = `transparent`;
            document.querySelector(".experience").style.background = `transparent`;
            document.querySelector(".education").style.background = `transparent`;
            document.querySelector(".skills").style.background = `transparent`;
            document.querySelector(".projects").style.background = `transparent`;
            document.querySelector(".contacts").style.background = `transparent`;
            setTimeout(() => {
                cube.style.transform = `rotateX(${270}deg) rotateZ(${360}deg)`;
                document.querySelector(".home").style.background = `transparent`;
                document.querySelector(".experience").style.background = `transparent`;
                document.querySelector(".education").style.background = `transparent`;
                document.querySelector(".skills").style.background = `transparent`;
                document.querySelector(".projects").style.background = `transparent`;
                document.querySelector(".contacts").style.background = `transparent`;
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

    setTimeout(() => {cube.style.transform = `rotateX(${360}deg) rotateY(${360}deg) scale(${1})`;
    document.querySelector(".home").style.background = `#000000`;
    document.querySelector(".experience").style.background = `#000000`;
    document.querySelector(".education").style.background = `#000000`;
    document.querySelector(".skills").style.background = `#000000`;
    document.querySelector(".projects").style.background = `#000000`;
    document.querySelector(".contacts").style.background = `#000000`;
}, 7300);

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
