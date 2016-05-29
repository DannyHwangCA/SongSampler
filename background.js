chrome.contextMenus.create({

"title": "Twitter Social Toolkit",
"contexts":["selection"],
"onclick" : myFunction

});

function myFunction(selectedText) {
	chrome.tabs.create({url: "http://twitter.com/share?text="+selectedText.selectionText})
}