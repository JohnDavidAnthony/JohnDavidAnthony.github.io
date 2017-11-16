//Writes out each letter of the word until the whole word is written out
var finished = true;
var a;
var b;
function typeWriter(element, text, wordIndex, arrayIndex,fontList){
    finished = true;
    //If the word isn't completed keep writing
    if (wordIndex < text[arrayIndex].length) {
        //Adds a letter to the word
        element.innerHTML += text[arrayIndex][wordIndex];

        //Randomly selects time between key strokes
        let keyStroke = Math.floor((Math.random() * 100) + 70);

        //Calls itself again after a period of time
        setTimeout(function () {
            a = typeWriter(element, text, wordIndex + 1,arrayIndex, fontList)
        }, keyStroke);
    }
    //Calls typeDeleter function to un-type the text after a period of time
    else if (arrayIndex + 1 != text.length){
        setTimeout(function () {
            typeDeleter(element,text,0, arrayIndex, fontList);
        }, 2000);
        return;
    }
}

function typeDeleter(element,text,i, arrayIndex, fontList) {
    if (i < text[arrayIndex].length) {
        element.innerHTML = element.innerHTML.slice(0, -1);
        i++;
        b = setTimeout(function () {
            typeDeleter(element, text, i, arrayIndex, fontList);
        }, 50);

    }
    if (i == text[arrayIndex].length && finished){
        finished = false;
        advanceList(element, text, arrayIndex,fontList)
    }
}

//Advances typeWriter when done deleting
function advanceList (element, textArray, index, fontList){
    if (index < textArray.length){
        clearTimeout(a);
        clearTimeout(b);
        var currentFont = fontList[index + 1]
        element.style.fontFamily = currentFont+",sans-serif";
        typeWriter(element,textArray,0,index + 1, fontList)
    }
}