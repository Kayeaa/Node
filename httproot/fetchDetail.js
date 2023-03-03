function getDetails(id){
    fetch ('http://localhost:8000/movies'+id)
        .then(function(response){
            return response.json();
        })
            .then (function(data){
                const moviesDetailsElement = document.getElementById("movieDetail");
                moviesDetailsElement.innerHTML = data.Director;
            })
        .catch(function(err){
            console.log("Something went wrong", err);
        });
}

function deleteMovie(idMovie){
    fetch('/movies/:'+idMovie, {methid:'DELETE'})
    .then(function(response){
        window.location="/movies"
    });
}