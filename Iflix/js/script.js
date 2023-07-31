$(document).ready(function () {
    getPopularMovies()
});

$(document).ready(function () {
    getUpcomingMovies()
});


function getPopularMovies(){
    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        dataType: "json",
        headers:{
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGRmNDA5NmQ2MTNiNDNlM2Y0NjhiYzUzZjI1YmYyYyIsInN1YiI6IjYzZDQ5OWExMjBlNmE1MDBkNTQzMGIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-lTVsmLOeKvI9CuNFeRcuqL1-YUnbdxp_ak94jhmlU'
        },
        success: function (response) {
            response.results.forEach(i=>{
                var original_title = i.original_title
                var release_date = i.release_date
                var poster_path = i.poster_path
                var vote_average = i.vote_average
                var html =`
                <div class="card">
                <img src="https://image.tmdb.org/t/p/original/${poster_path}" class="card-image">
                <h4 class="card-title">${original_title} <span class="date">|${release_date}</span></h4>
                <div class="rating">
                <span class="fa fa-star" style="color:rgb(246, 210, 29);"></span>
                <h5 class="score">${vote_average}</h5>
                </div>

                <a class="card-button" href="#">
                <i class="fa fa-play"></i> Trailer
                </a>
                </div>`


                $('.gridMovies').append(html)
            })
        }
    });
}

function getUpcomingMovies(){
    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        dataType: "json",
        headers:{
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGRmNDA5NmQ2MTNiNDNlM2Y0NjhiYzUzZjI1YmYyYyIsInN1YiI6IjYzZDQ5OWExMjBlNmE1MDBkNTQzMGIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-lTVsmLOeKvI9CuNFeRcuqL1-YUnbdxp_ak94jhmlU'
        },
        success: function (response) {
            response.results.forEach(i=>{
                var original_title = i.original_title
                var release_date = i.release_date
                var poster_path = i.poster_path
                var vote_average = i.vote_average
                var html =`
                <div class="card-upcoming">
                <img src="https://image.tmdb.org/t/p/original/${poster_path}" class="card-image-upcoming">
                <h4 class="card-title-upcoming">${original_title} <span class="date-upcoming">|${release_date}</span></h4>
                
                </div>`


                $('.gridUpcomingMovies').append(html)
            })
        }
    });
}
