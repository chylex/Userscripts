// ==UserScript==
// @name         Wholesome Reddit
// @description  Hides the downvote button, and forces the upvote button to be always visible.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://*.reddit.com
// @include      https://*.reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

var style = `
body:not(:lang(np)) .arrow.up {
  visibility: visible !important;
  pointer-events: auto !important;
}

body:not(:lang(np)) .arrow.down {
  visibility: hidden !important;
}`;

function inject(){
  if (document.head && document.body){
    document.head.insertAdjacentHTML("beforeend", `<style type="text/css" id="wholesome-reddit">${style}</style>`);
  }
  else{
    window.setTimeout(inject, 50);
  }
};

inject();
