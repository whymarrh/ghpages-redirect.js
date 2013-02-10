chrome.webRequest.onBeforeRequest.addListener(
	function (info) {
		return {
			redirectUrl: info.url.replace(/^http:\/\//i, "https://")
		};
	},
	// filters
	{
		urls: ["http://*.wikipedia.org/*"]
	},
	// extraInfoSpec
	["blocking"]
);
