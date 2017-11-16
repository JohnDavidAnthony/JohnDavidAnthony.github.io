window.sr = ScrollReveal({ reset: true });
sr.reveal('.centerDiv');
sr.reveal('.aboutMeInline');


function onPageLoad() {
    let descriptionList = ["I'm a developer", "I'm a photographer", "I make things"];
    let fontList = ["Courier","Quicksand","Open Sans"];
    let element = document.getElementById("jdDescription");
    setTimeout(function () {
        typeWriter(element,descriptionList,0,0,fontList)
    }, 4200);
    createWord("Welcome",document.getElementById("welcomeMessage"));
    startAnimation();
}


document.onload = onPageLoad();



