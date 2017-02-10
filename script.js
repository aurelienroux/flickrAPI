var FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key='
var FLICKR_API_KEY = '0e20370658ae9b1a32d1f24c552061f8';

function getPhotosForSearch(searchTerm){
	var url = `${FLICKR_API_URL}${FLICKR_API_KEY}&text=${searchTerm}`;
	return(
		fetch(url)
		.then(result => result.json())
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

	var image = document.createElement("img");
	image.setAttribute('src', photoData.thumb);
	image.setAttribute('alt', photoData.title);

	link.appendChild(image);

	return (link);
}


// UI COMPONENTS ////////////////////////////////////
var app = document.querySelector('#app');
var picForm = document.querySelector('.pic-form');
var picTerm = document.querySelector('.pic-term');
var picBtn = document.querySelector('.get-pic-btn');
var picDisplay = document.querySelector('.pic-display');


picForm.addEventListener('submit', function(event){
	event.preventDefault();
	var searchTerm = picTerm.value;

	picDisplay.innerHTML = '';
	getPhotosForSearch(searchTerm)
	.then(arrayOfThumbnails => {
		arrayOfThumbnails.forEach(pic => picDisplay.appendChild(pic))
	})

})
