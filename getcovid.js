getResult();
function getResult(){

	$.ajax({
		url : 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/more',
		type : 'GET',
		dataType : 'json',
		success: function (result) {
			let total = result.total;
			$('#title-covid').html(`<h1 class="text-center mb-3">Indonesia Covid-19 Status<h1>`);
			$('#covid-box').html(`
			<div class="col-sm-6 col-md-6 col-lg-3">
            <div class="card bg-success mb-3">
              <div class="card-body text-center">
                <h2 class="text-light">Positif</h2>
                <hr>	
                <p class="card-text"><h4 class="text-light">`+total.positif+`</h4></p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="card bg-warning mb-3">
              <div class="card-body text-center">
                <h2 class="text-light">Dirawat</h2>
                <hr>
                <p class="card-text"><h4 class="text-light">`+total.dirawat+`</h4></p>
              </div>
            </div>
          </div><div class="col-sm-6 col-md-6 col-lg-3">
            <div class="card bg-primary mb-3">
              <div class="card-body text-center">
                <h2 class="text-light">Sembuh</h2>
                <hr>
                <p class="card-text"><h4 class="text-light">`+total.sembuh+`</h4></p>
              </div>
            </div>
          </div><div class="col-sm-6 col-md-6 col-lg-3">
            <div class="card bg-danger mb-3">
              <div class="card-body text-center">
                <h2 class="text-light">Meninggal</h2>
                <hr>
                <p class="card-text"><h4 class="text-light">`+total.meninggal+`</h4></p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12">
          <p class="text-center"><b>Last update: </b>`+ total.lastUpdate +`<p>
          </div>
			`);
			
		}
	});
}