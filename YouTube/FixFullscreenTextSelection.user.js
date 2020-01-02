// ==UserScript==
// @name         Fix YouTube Fullscreen Text Selection
// @description  Prevents accidentally selecting text when double-clicking the video to toggle fullscreen.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://youtube.com/*
// @include      https://*.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.addEventListener("onmozfullscreenchange" in document ? "mozfullscreenchange" : "fullscreenchange", function(){
    window.getSelection().removeAllRanges();
});
