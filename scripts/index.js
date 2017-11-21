window.sr = ScrollReveal({ reset: true });
sr.reveal('#aboutMe');
sr.reveal('.aboutMeInline');


// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var content = document.getElementById("marginFix");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
    //Sticky class offset
    let width = (window.innerWidth);
    if (width > 1025){
        if (window.pageYOffset >= sticky -100) {
            navbar.classList.add("sticky");
            content.style.margin = "-60px auto auto   0px";
        } else {
            navbar.classList.remove("sticky");
            content.style.margin = "-555px auto auto   0px";
        }
    }
    else if (width > 750){
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            content.style.margin = "-0 auto auto   0px";
        } else {
            navbar.classList.remove("sticky");
            content.style.margin = "-80px auto auto   0px";
        }
    }
    else{
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            content.style.margin = "90px auto auto   0px";
        } else {
            navbar.classList.remove("sticky");
            content.style.margin = "0px auto auto   0px";
        }
    }

}


function onPageLoad() {
    let descriptionList = ["I'm a developer", "I'm a photographer", "I get things done."];
    let fontList = ["Courier","Quicksand","Open Sans"];
    let element = document.getElementById("jdDescription");
    setTimeout(function () {
        typeWriter(element,descriptionList,0,0,fontList)
    }, 4200);
    createWord("Welcome",document.getElementById("welcomeMessage"));
    startAnimation();

}


document.onload = onPageLoad();



