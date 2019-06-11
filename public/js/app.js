
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
            name: $("#burg").val().trim(),
            favorite: $("[burg=favorite]:checked").val().trim()

        };
        $.ajax("/api/cats", {
            type: "POST",
            data: newFav
          }).then(
            function() {
              console.log("Made another Fav");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });
        $(".delete-burger").on("click", function(event) {
            var id = $(this).data("id");
        
            // Send the DELETE request.
            $.ajax("/api/burgers/" + id, {
              type: "DELETE"
            }).then(
              function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
              }
            );
          });

    });