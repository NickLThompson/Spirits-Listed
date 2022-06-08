$(document).ready(function () {
    var searchParam = window
        .location
        .search
        .split("&")
        .shift()
        .replace('?','')
        .split('=')
        .pop();

    if(!searchParam) location.replace(`./index.html`)

    console.log(searchParam)

    var fetchDrinks = function () {
        var ingredient = $(this).data("value");

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchParam}`)
                .then(function (res) { 
                    return res.json();
                })
                .then(function({drinks}){
                    drinks.forEach(function(drink){
                        //console.log(drink)
                        var drinkContainer = $('<div/>');
                        drinkContainer.addClass('col-12');

                        var drinkCard = $('<div/>');
                        drinkCard.addClass('card');

                        var drinkImg = $('<img/>');
                        drinkImg.attr('src',drink.strDrinkThumb);
                        drinkImg.attr('alt',drink.strDrink);
                        drinkImg.addClass('card-img-top');

                        var drinkBody = $('<div/>');
                        drinkBody.addClass('card-body');

                        var drinkTitle = $('<h2/>');
                        drinkTitle.text(drink.strDrink);

                        var ingredientsButton = $('<button/>');
                        ingredientsButton.addClass('btn btn-info getIngredients');
                        ingredientsButton.text('Get Ingredients');
                        ingredientsButton.data('value',{id: drink.idDrink});

                        drinkBody.append(drinkTitle);
                        drinkBody.append(ingredientsButton);

                        drinkCard.append(drinkImg);
                        drinkCard.append(drinkBody);

                        drinkContainer.append(drinkCard);
                        $('.drinkSection').append(drinkContainer);

                    })
                    
                })
                .catch(function(err){
                    console.log(err);
                })
            // return response.json();
        }
        console.log("search");

    // loads results when button is clicked
    
    function init(){
        fetchDrinks();
    };

    init();

    $('.drinkSection').on('click',function(element){
        if($(element.target).attr('class').includes('getIngredients')){
            var drinkId = $(element.target).data('value').id;
            console.log(drinkId);
            // ingredientsApi(drinkId);
        }
        else if($(element.target).attr('class').includes('getdictionary')){
            // dictionaryApi(word);
        }
    })
});