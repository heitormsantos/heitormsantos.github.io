document.onreadystatechange = function () {
	if (document.readyState === 'interactive') {
	  // The page is fully loaded
	  console.log('My body is ready');

	  document.getElementById('image-link').onclick = function(){
	  	document.getElementById('image-container').scrollIntoView();
	  };

	  document.getElementById('text-link').onclick = function(){
	  	document.getElementById('text-container').scrollIntoView();
	  };

	  document.getElementById('table-link').onclick = function(){
	  	document.getElementById('table-container').scrollIntoView();
	  };

	  document.getElementById('contacts-link').onclick = function(){
	  	document.getElementById('contacts-container').scrollIntoView();
	  };
	}
}