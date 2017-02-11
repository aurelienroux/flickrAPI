var FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key='
var FLICKR_API_KEY = '0e20370658ae9b1a32d1f24c552061f8';

function getPhotosForSearch(searchTerm){
	var url = `${FLICKR_API_URL}${FLICKR_API_KEY}&text=${searchTerm}`;
	return(
		$.getJSON(url)
		.then(function(jsonResponse){
			var picsArray = jsonResponse.photos.photo;
			return picsArray.map(function(pic){
				var picObj = {
					thumb: 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_n.jpg',
					large: 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_h.jpg',
					title: pic.title
				}
				return createFlickrThumb(picObj);
			})
		})
	)
}

function createFlickrThumb(photoData){
	var link = document.createElement('a');
	link.setAttribute('href', photoData.large);
	link.setAttribute('target', '_blank');
	
	link.style.background = `url(${photoData.thumb}) no-repeat center center`
	link.style.backgroundSize = "cover";
	link.style.minHeight = "200px";

	return (link);
}

// UI COMPONENTS ////////////////////////////////////
var app = $('#app');
var picForm = app.find('.pic-form');
var picTerm = app.find('.pic-term');
var picBtn = app.find('.get-pic-btn');
var picDisplay = app.find('.pic-display');

picForm.on('submit', function(event){
	event.preventDefault();
	var searchTerm = picTerm.value;

	picDisplay.html('');
	getPhotosForSearch(searchTerm)
	.then(arrayOfThumbnails => {
		arrayOfThumbnails.forEach(pic => picDisplay.append(pic))
	})
})
