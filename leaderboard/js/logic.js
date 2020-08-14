$(() =>{
    $.get("../../php/getScores.php",(data) =>{
        $("#scores").html(data)
    })
})