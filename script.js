// www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}

function init(data) {
    
}

$(document).ready(function () {


    var fetchDrinks = function () {
        var ingredient = $(this).data("value");

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                .then(function (res) { 
                    return res.json();
                })
                .then(function(data){
                    console.log(data);
                    init(data);
                })
                .catch(function(err){
                    console.log(err);
                })
            // return response.json();
        }
        console.log("search");

    // loads results when button is clicked
    
    $("#options").on("click",".btn", fetchDrinks);
});

    // fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}")
