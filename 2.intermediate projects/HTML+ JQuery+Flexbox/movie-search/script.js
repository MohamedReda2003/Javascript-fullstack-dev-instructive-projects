$(document).ready(function() {
    $('#searchButton').on('click', function() {
        let searchQuery = $('#search').val();
        API_key = "YOUR_API_KEY"
        //You can get the API key from https://www.omdbapi.com/apikey.aspx
        $.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey={API_key}`, function(data) {
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
