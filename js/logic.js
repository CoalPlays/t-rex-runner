var _score = ""
var nickname = "";

$(() => {
    $("#darkmode").click(() => {
        if ($("body").hasClass("dark")) {
            $("#darkmode").text("Dark Mode")
            $("body").addClass("white")
            $("body").removeClass("dark")
        } else {
            $("#darkmode").text("Light Mode")
            $("body").addClass("dark")
            $("body").removeClass("white")
        }
        $("darkmode").html("Save")
    })


})




// Extrahiert den Spieler Score
function death(score) {
    for (let i = 3; i < score.length; i++) {
        _score = _score + score[i]
    }
    askForSave()
}

function askForSave() {
    nickname = prompt("Du hast einen Score von " + _score + " Punkten. Wie ist dein Nickname?")
    if (nickname != null) {
        SaveData();
    } else {
        location.reload();
    }
}

function SaveData() {
    $.get("../php/insertScore.php", {
        nick: nickname,
        score: _score
    })
    alert("Eintrag gespeichert")
    location.reload();

}