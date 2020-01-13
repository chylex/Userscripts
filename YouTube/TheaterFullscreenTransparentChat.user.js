// ==UserScript==
// @name         YouTube Theater Fullscreen + Transparent Chat
// @description  In theater mode, it expands video to full screen, makes chat transparent and overlays it over the video. Note that colors of images in chat will be inverted, and the player controls may behave strangely.
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

var settings = {
    "chatWidth": 375,
    "opacity": 0.75
};

var interval;
var load = function(){
    var page = document.getElementById("page");
    
    if (page){
        window.clearInterval(interval);
        
        function onPlayerTypeUpdated(){
            var classes = document.documentElement.classList;
            var chatElement = document.getElementById("live-chat-iframe");
            
            classes.toggle("chylex-player-wide", page.classList.contains("watch-wide"));
            classes.toggle("chylex-player-has-chat", chatElement && window.getComputedStyle(chatElement).display != "none");
        }
        
        var observer = new MutationObserver(onPlayerTypeUpdated);
        
        observer.observe(page, {
            attributes: true,
            attributeFilter: [ "class" ]
        });
        
        onPlayerTypeUpdated();
        
        var style = document.createElement("style");
        document.head.appendChild(style);
        
        var theatre = "html.chylex-player-wide";
        var theatreWithChat = theatre + ".chylex-player-has-chat";
        
        style.innerText = `
${theatre} body {
    overflow: hidden;
}

${theatre} #player-api {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
}

${theatre} .html5-main-video {
    width: 100vw !important;
    height: 100vh !important;
    left: 0 !important;
}

${theatre} #masthead-positioner {
    display: none;
}

${theatreWithChat} .ytp-chrome-bottom {
    width: calc(100vw - ${settings.chatWidth}px - 36px) !important;
}

${theatreWithChat} #live-chat-iframe {
    position: fixed;
    top: 0;
    right: 0;
    width: ${settings.chatWidth}px;
    height: 100vh !important;
    opacity: ${settings.opacity};
    z-index: 1000;
    filter: invert(100%);
}`;
    }
};

interval = window.setInterval(load, 50);
