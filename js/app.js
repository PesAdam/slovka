//DATA
let word = '';
let currentRow = document.querySelector('.row');



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

    let tile = currentTile()
    tile.innerHTML = letter
    
}

const removeLetter = () => {
    let tile = currentTile()
    tile.innerHTML = ''
    word = word.slice(0, -1);
}

// TILE TO UPDATE
const currentTile = () => {
    return currentRow.querySelector(':nth-child('+ word.length + ')')
}

const currentRow = () => {
    return document.querySelector('.row');
}