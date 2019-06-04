
//wait to attach handlers until the dom is fully loaded
$(function(){
    $(".favorites").on("click", function(event){
        var id = $(this).data("id");
        var favBurger = $(this).data("favburger");

        var favBurgerNow = {
            favorite: favBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: favBurgerNow
        }).then(
            function() {
                console.log("my favorite burger is ", favBurger);
                //reload to get new list
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: 
        }

    })
})