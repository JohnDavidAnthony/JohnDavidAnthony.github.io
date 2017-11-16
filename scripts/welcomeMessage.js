//Adds in divs for each letter in word
function createWord(word, parentElement){
    for (let i in word){
        let div = document.createElement("div");
        // div.classList.add('MyClass');
        div.innerHTML = word[i];
        parentElement.appendChild(div);
    }
}

function startAnimation() {
    anime({
        targets: '#welcomeMessage div',
        opacity:1,
        scale:1,
        easing:'easeInBack',
        delay: function(el, index) {
            return index * 80;
        },

        duration: 3000,
        complete: function() {
            zenscroll.to(document.getElementById("halfway"));
        }
    });
}