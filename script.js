https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=YOUR_API_KEY&text=THE_SEARCH_TEXT

var FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key='
var FLICKR_API_KEY = '0e20370658ae9b1a32d1f24c552061f8';
var FLICKR_API_SEARCHTERM = 'guitar'



function myFunction(){
	var url = `${FLICKR_API_URL}${FLICKR_API_KEY}&text=${FLICKR_API_SEARCHTERM}`;

	return(
		fetch(url)
		.then(result => result.json())
		.then(data => console.log(data))
		
	)
	
}

