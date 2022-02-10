//DATA
let word = '';


//KLAVESNICOVANIE 
document.addEventListener('keydown', (event)=>{
    if(event.key === "Enter"){
        submitWord();
    } else if (event.key === "Backspace"){
        removeLetter();
    } else{
        addLetter(event.key);
    }
});

const submitWord = () => {
    
}

const addLetter = (letter) => {
    word = word + letter
    console.log(word)
}

const removeLetter = () => {
    word = word.slice(0, -1);
}