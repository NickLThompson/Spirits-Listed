// www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}

$(document).ready(function () {

    var buttonEl = $(".btn");

    var searchBtnEl = $("#searchBtn");

    var ingredient = [];

    var chosenIngredient = [];

    var input = $(".checkbox");
    // compiles user ingredients into array to search API for drinks
    var getSearchResults = function (element) {
        // adds selected ingredient to array whenever button is clicked
        if (element.target.checked === true) {
            ingredient.push(element.target.value);
            // removed unselected ingrdient from array whenever button is unclicked
        } else {
            ingredient.splice(ingredient.indexOf(element.target.value), 1);
        } return chosenIngredient.push(ingredient);

    }

    var fetchDrinks = function () {
        for (var i = 0; i < chosenIngredient.length; i++) {
            fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${chosenIngredient[i]}`)
            .then(function (response) { 
                console.log(response.json());
                return response.json();
            })
            // return response.json();
        }
        console.log("search");
    };
    // checks the checkbox for clicks
    input.on("click", getSearchResults);

    buttonEl.on("click", function () {
        console.log("I'm not doing anything yet");
    });

    searchBtnEl.on("click", fetchDrinks)

});

    // fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}")
