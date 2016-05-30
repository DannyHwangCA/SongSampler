chrome.contextMenus.create({

"title": "Twitter Social Toolkit",
"contexts":["selection"],
"onclick" : myFunction

});

function myFunction(selectedText) {
	var myUrl = "https://api.spotify.com/v1/search?q="+selectedText.selectionText+"&type=track&market=US"
	fixedUrl = myUrl.replace(" ", "")
	console.log(fixedUrl)
	// chrome.tabs.create({url: "http://twitter.com/share?text="+selectedText.selectionText})
}