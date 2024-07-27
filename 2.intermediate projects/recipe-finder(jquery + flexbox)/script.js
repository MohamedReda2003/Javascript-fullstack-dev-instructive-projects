$(document).ready(function() {
    $('#searchButton').on('click', function() {
        let searchQuery = $('#search').val();
        $.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`, function(data) {
            $('#results').empty();
            data.meals.forEach(meal => {
                $('#results').append(`
                    <div class="recipe">
                        <h3>${meal.strMeal}</h3>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    </div>
                `);
            });
        });
    });
});
