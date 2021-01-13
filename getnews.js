getResult();
function getResult(){
	$('#news-list').html('')

	$.ajax({
		url : 'http://newsapi.org/v2/top-headlines',
		type : 'get',
		dataType : 'json',
		data : {
			'apikey': 'c5350341c15848988b20b1710da843de',
			'country': 'id'
			// 's': $('#search-input').val()
		},
		success: function (result) {
			// console.log(result);
			if (result.status == "ok") {

				let movies = result.articles;
// <h1 class="text-center">Top Headlines</h1>
					$('#news-list').html(`
					<div class="col-md-12">
					<h1 class="text-center mb-3">Top Headlines<h1>
					</div>
					`)
				$.each(movies, function(i , data){
					$('#news-list').append(`
						<div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
						<div class="card mb-4 shadow-sm">
						<img src="`+ data.urlToImage +`" class="bd-placeholder-img card-img-top miniimg" width="100%" height="225"></img>
						<div class="card-body">
						<a href="`+ data.url +`"><h5>`+ data.title +`</h5></a>
						<small><b>Author: </b> `+ data.author +`</small>
						<p class="card-text">`+ data.description +`</p>
						<div class="d-flex justify-content-between align-items-center">
						<a href="`+ data.url +`" class="btn btn-sm btn-dark">Selengkapnya</a>
						<small class="text-muted">`+ data.publishedAt +`</small>
						</div>
						</div>
						</div>
						</div>
						`)

					return i<9;
				})

			}else{
				$('#news-list').html(`
					<div class="col-md-12">
					<h1 class="text-center">Filed to load.<h1>
					</div>
					`)
			}
		}
	});
}