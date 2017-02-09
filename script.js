https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=YOUR_API_KEY&text=THE_SEARCH_TEXT

var FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key='
var FLICKR_API_KEY = '0e20370658ae9b1a32d1f24c552061f8';
var FLICKR_API_SEARCHTERM = 'guitar'

function getPhotosForSearch(){
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
			})
			.forEach(function(picLink){
				console.log(picLink);
			})
		})
	)
}

function createFlickrThumb(photoData){
	var link = document.createElement('a');
	link.setAttribute('href', photoData.large);
	link.setAttribute('target', '_blank');

	var image = document.createElement("img");
	image.setAttribute('src', photoData.thumb);
	image.setAttribute('alt', photoData.title);

	link.appendChild(image);

	return link;
}


// UI COMPONENTS ////////////////////////////////////
var app = document.querySelector('#app');
var picForm = document.querySelector('.pic-form');
var picTerm = document.querySelector('.pic-term');
var picBtn = document.querySelector('.get-pic-btn');
var picDisplay = document.querySelector('.pic-display');













