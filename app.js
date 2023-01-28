
const letter = document.querySelector('.word')
var y = document.getElementById("myAudio");

function active(x) {
    myInterval = setInterval(
        function () {
            let word = generateString(8)
            letter.innerHTML = word
        }, 50);
    
    y.play(); 

    // setTimeout (
    //     function() {
    //         Inactive()
    //     }, 1000
    // )
    
}

function Inactive(x) {
    clearInterval(myInterval)
    letter.innerHTML = "HOVERING"
    y.pause()
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    letter.innerHTML = result
    return result;
}

