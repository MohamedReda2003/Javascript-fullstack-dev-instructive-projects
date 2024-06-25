$(document).ready(function() {
    $('#searchButton').on('click', function() {
        let searchQuery = $('#search').val();
        $.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=YOUR_API_KEY`, function(data) {
            $('#results').empty();
            data.Search.forEach(movie => {
                $('#results').append(`
                    <div class="movie">
                        <h3>${movie.Title}</h3>
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <p>${movie.Year}</p>
                    </div>
                `);
            });
        });
    });
});
