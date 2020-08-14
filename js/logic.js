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