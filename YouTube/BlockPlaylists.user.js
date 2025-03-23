// ==UserScript==
// @name         Block YouTube Playlists
// @description  Removes playlists from YouTube video URLs.
// @version      2
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

function redirectPlaylist() {
	if (location.pathname === "/watch" && location.search.includes("&list=")) {
		location.replace(location.href.replace(/&list=(.*)/, ""));
	}
}

redirectPlaylist();
document.addEventListener("yt-navigate-start", redirectPlaylist);
