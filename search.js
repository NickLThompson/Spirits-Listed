
var searchParam = window
    .location
    .search
    .split("&")
    .shift()
    .replace('?', '')
    .split('=')
    .pop();

if (!searchParam) location.replace(`./index.html`)

//function that prints drinks with chosen ingredient and creates cards to display drinks
var fetchDrinks = function () {
    var ingredient = $(this).data("value");

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchParam}`)
        .then(function (res) {
            return res.json();
        })
        .then(function ({ drinks }) {
            console.log(drinks);
            drinks.forEach(function (drink) {

                // creating a container for the drinks
                var drinkContainer = $('<div/>');
                drinkContainer.addClass('container col-12');

                // creating a card for the drinks
                var drinkCard = $('<div/>');
                drinkCard.addClass('row card');

                // a place for the image of the drinks to sit in the container
                var imgDiv = $('<div/>');
                var drinkImg = $('<img/>');
                drinkImg.attr('src', drink.strDrinkThumb);
                drinkImg.attr('alt', drink.strDrink);
                drinkImg.addClass('col card-img-start');

                // holds the drink info
                var drinkBody = $('<div/>');
                drinkBody.addClass('card-body mx-auto d-grid gap-2');

                // drink title
                var titleDiv = $('<div/>');
                titleDiv.addClass('col mx-auto my-start')
                var drinkTitle = $('<h2/>');
                drinkTitle.text(drink.strDrink);

                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (data) {

                        drinkBody.append(titleDiv);
                        titleDiv.append(drinkTitle);
                        var object = data.drinks[0]
                        for (let i in object) {

                            // adds ingredients list
                            if (object.hasOwnProperty(i)) {
                                //console.log(object[i])
                                if (object[i] !== null) {
                                    if (i.includes('strIngredient')) {
                                        console.log(object[i])
                                        var drinkIngredients = $('<p/>');
                                        drinkIngredients.text(object[i]);
                                        titleDiv.append(drinkIngredients);

                                    }
                                }
                            }
                        }

                        for (let i in object) {

                            // adds measurements
                            if (object.hasOwnProperty(i)) {
                                //console.log(object[i])
                                if (object[i] !== null) {
                                    if (i.includes('strMeasure')) {
                                        console.log(object[i])
                                        var measureDiv = $('<div/>');
                                        var drinkMeasure = $('<p/>');
                                        drinkMeasure.text(object[i]);
                                        measureDiv.append(drinkMeasure);
                                        drinkBody.append(measureDiv);

                                    }
                                }
                            }
                        }

                        measureDiv.append(object.strInstructions);

                        drinkCard.append(imgDiv);
                        imgDiv.append(drinkImg);
                  
                        drinkCard.append(drinkBody);

                        drinkContainer.append(drinkCard);
                        $('.drinkSection').append(drinkContainer);

                        // console.log(data);
                        // console.log(data.drinks[0].strInstructions);

                        // for(i = 1; i < data.drinks[0].strIngredient.length; i++)
                        // console.log(data.drinks[0].strIngredient1);
                        // console.log(data.drinks[0].strIngredient2);
                        // console.log(data.drinks[0].strIngredient3);
                        // console.log(data.drinks[0].strIngredient4);
                        // })
                    })

            })

        })
        .catch(function (err) {
            console.log(err);
        })
    // return response.json();
}

// loads results when button is clicked

function init() {
    fetchDrinks();
};

init();

function ingredientsApi(id, target) {
    //$(target).parent
}

$('.drinkSection').on('click', function (element) {
    if ($(element.target).attr('class').includes('getIngredients')) {
        var drinkId = $(element.target).data('value').id;
        console.log(drinkId);
        // ingredientsApi(drinkId);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {

                console.log(data);
                // console.log(data.drinks[0].strInstructions);

                // for(i = 1; i < data.drinks[0].strIngredient.length; i++)
                // console.log(data.drinks[0].strIngredient1);
                // console.log(data.drinks[0].strIngredient2);
                // console.log(data.drinks[0].strIngredient3);
                // console.log(data.drinks[0].strIngredient4);
                // })
            })

        //strIngredient
        //strInstructions
        //strMeasure
    }
    else if ($(element.target).attr('class').includes('getDictionary')) {

        // dictionaryApi(word);
    }
})





// click event for home button
var homeBtnEl = $('#homeBtn');
homeBtnEl.on('click', function () {
    location.replace(`./index.html`)
});






