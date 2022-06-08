// www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}

function switchPage(ingredient) {
    location.replace(`./searchpage.html?search=${ingredient}`)
}

$(document).ready(function () {

    //redirects to new page with users chosen ingredient
    var handleClick = function () {
        var ingredient = $(this).data("value");
        switchPage(ingredient);
    }

    // loads results when button is clicked

    $("#options").on("click", ".btn", handleClick);
});

    // fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}")
