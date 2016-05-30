window.onload = function() {
	document.getElementById('save').onclick = function(){
		var value = document.getElementById('saveLine').value;
		// alert(value);
		chrome.storage.sync.set({'myLine': value}, function(){
			alert('Sucess!');
		});
	},

	document.getElementById('get').onclick = function() {
		chrome.storage.sync.get('myLine', function(data){
			alert(data.myLine);
		});
	}
}