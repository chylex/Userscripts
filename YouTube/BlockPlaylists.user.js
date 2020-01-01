// ==UserScript==
// @name         Block YouTube Playlists
// @description  Removes playlists from YouTube video URLs.
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

if (location.pathname == "/watch" && location.search.includes("&list=")){
    history.replaceState({}, document.title, location.search.replace(/&list=(.*)/, ""));
    location.reload();
}

document.addEventListener("spfclick", function(e){
    var url = e.detail.url;
    
    if (url.includes("youtube.com/watch?") && url.includes("&list=")){
        // forces a normal page load
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}, true);
