$(function() {
    $("devour-burger").on("submit", function(event) {
        event.preventDeafult();

        const burger = $(this).children(".burger").val();
        console.log(burger);

        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger
        }).then(function(data) {
            location.reload();
        });
    });

    $
});