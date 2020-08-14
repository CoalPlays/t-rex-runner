$(() =>{
    $.get("getScores.php",(data) =>{
        $("#scores").html(data)
    })
})