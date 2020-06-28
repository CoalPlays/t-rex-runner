
var _score = ""
var nickname = "";

// Extrahiert den Spieler Score
function death(score) {
    for (let i = 3; i < score.length; i++) {
        _score = _score + score[i]
    }
    askForSave()
}

function askForSave() {
    nickname = prompt("Du hast einen Score von " + _score + " Punkten. Wie ist dein Nickname?") 
   if(nickname != null) {
   } 
}

function SaveData() {
    $.post("db.php",{
        nick: nickname,
        score: _score
    })
}





