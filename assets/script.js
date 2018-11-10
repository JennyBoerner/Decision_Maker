var restaurants = [];
var movieTitles = [];

$("#submit-btn-yelp").on("click", function(event) {
    event.preventDefault();
});

$("#submit-btn-yelp").on("click", function() {
    var city = $("#city-input").val().trim();
    var queryURL = "https://api.foursquare.com/v2/venues/explore?client_id=TBNVZDWBESTUA1VZ05GU50CHYIHRZM5NLDL5ICF00C2Z3EFM&client_secret=JFFXS5SDR055IYCWVUYECZHB0OEBW3CRNKHY1VEQJRMCOY4X&v=20180323&limit=5&near=" + city + "&query=restaurant";
    $("#city-input").val("");
    $.ajax({
        url: queryURL,
        method: "GET",

    })
    .then(function(response) {

        var results = response.response.groups[0].items

        for (var i = 0; i < results.length; i++) {
            var restaurantDiv = $("#rest-options");
            var h1 = $("<h3>").addClass("animated rollIn").text(results[i].venue.name);
            var p = $("<p>").addClass("animated rollIn").text(results[i].venue.location.address);
            restaurantDiv.append(h1);
            restaurantDiv.append(p);
            restaurants.push(results[i].venue.name);
        }
    });
});

$("#yelp-make-decision-btn").on("click", function(event) {
    event.preventDefault();
});

$("#yelp-make-decision-btn").on("click", function() {
    restaurantWinnerIndex = Math.floor(Math.random() * (restaurants.length));
    restaurantWinner = restaurants[restaurantWinnerIndex];
    winnerDiv = $("#yelp-decision-body");
    var h1 = $("<h3>").addClass("animated tada").text(restaurantWinner);
    winnerDiv.append(h1);
});

$("#submit-omdb").on("click", function(event) {
    event.preventDefault();
});

$("#submit-omdb").on("click", function() {
    var movie = $("#movie-input").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=1a2e077a&=trilogy"
    $("#movie-input").val("");
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        var title = response.Title;
        var rating = response.Rated;
        var runtime = response.Runtime;
        var moviesDiv = $("#movie-options");
        var htitle = $("<h3>").addClass("animated rollIn").text(title);
        var hrating = $("<p>").addClass("animated rollIn").text("Rating: " + rating);
        var hruntime = $("<p>").addClass("animated rollIn").text("Runtime: " + runtime);
        moviesDiv.append(htitle);
        moviesDiv.append(hrating);
        moviesDiv.append(hruntime);
        movieTitles.push(title);
    });
});

$("#decide-omdb").on("click", function(event) {
    event.preventDefault();
});

$("#decide-omdb").on("click", function() {
    movieTitlesIndex = Math.floor(Math.random() * (movieTitles.length));
    movieWinner = movieTitles[movieTitlesIndex];
    winnerDiv = $("#omdb-decision-body");
    var h1 = $("<h3>").addClass("animated tada").text(movieWinner);
    winnerDiv.append(h1);
});
