// ==UserScript==
// @name         Redirect YouTube Shorts
// @description  Redirects YouTube shorts to normal video URLs.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://youtube.com/*
// @include      https://*.youtube.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

function redirectShort() {
	if (location.pathname.startsWith("/shorts/")) {
		location.replace(location.href.replace("/shorts/", "/watch?v="));
	}
}

redirectShort();
document.addEventListener("yt-navigate-start", redirectShort);
