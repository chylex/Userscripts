// ==UserScript==
// @name         Hide YouTube Seek Bar & Duration
// @description  Hides all mentions of video durations by default. Press 'AltGr' to toggle.
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

var load = function(){
    var style = document.createElement("style");
    document.head.appendChild(style);

    var ifHide = "body:not(.chylex-unhide-time)";

    style.innerText = `
    ${ifHide} .video-time, ${ifHide} .resume-playback-progress-bar { display: none }
    ${ifHide} .ytp-time-separator, ${ifHide} .ytp-time-duration { display: none }
    ${ifHide} .ytp-progress-bar { display: none }
    ${ifHide} .ytp-progress-bar-container { cursor: default !important; height: 3px !important; margin-bottom: 1px; background: rgba(255, 255, 255, 0.2) }
    ${ifHide} .ytp-big-mode .ytp-progress-bar-container { height: 5px !important; margin-bottom: 2px; }`;

    document.addEventListener("keydown", function(e){
        if (e.key === "AltGraph"){
            document.body.classList.toggle("chylex-unhide-time");
        }
    }, true);
};

if (document.head){
    load();
}
else{
    var interval = window.setInterval(function(){
        if (document.head){
            window.clearInterval(interval);
            load();
        }
    }, 50);
}
