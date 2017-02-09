https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=YOUR_API_KEY&text=THE_SEARCH_TEXT

var FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key='
var FLICKR_API_KEY = '0e20370658ae9b1a32d1f24c552061f8';
var FLICKR_API_SEARCHTERM = 'guitar'



function myFunction(){
	var url = `${FLICKR_API_URL}${FLICKR_API_KEY}&text=${FLICKR_API_SEARCHTERM}`;

	return(
		fetch(url)
		.then(result => result.json())
		.then(function(jsonResponse){
			var picsArray = jsonResponse.photos.photo;

			picsArray.map(function(pic){
				
				var picObj = {
					thumb: 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_t.jpg',
					large: 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_h.jpg',
					title: pic.title
				}

				return picObj;

				// var link = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_m.jpg';
				// return link;

			})
			.forEach(function(picLink){
				console.log(picLink);
			})

		})
	)
	
}

