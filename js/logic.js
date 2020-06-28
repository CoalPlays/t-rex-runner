
var _score = ""


// Extrahiert den Spieler Score
function death(score) {
    for (let i = 3; i < score.length; i++) {
        _score = _score + score[i]
    }
    askForSave()
}

function askForSave() {
   var nickname = prompt("Du hast einen Score von " + _score + " Punkten. Wie ist dein Nickname?") 
   if(nickname != null) {
   } 
}





