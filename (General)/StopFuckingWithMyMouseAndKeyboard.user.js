// ==UserScript==
// @name         Stop Fucking With My Mouse & Keyboard
// @description  Prevents websites from hijacking middle-clicks, right-clicks, and common keyboard shortcuts.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      http://*
// @include      https://*
// @grant        none
// ==/UserScript==

var unfuckMouse = function(e){
  if (e.button === 1 || e.button === 2){ // Middle & right click
    e.stopPropagation();
  }
};

var unfuckKeyboard = function(e){
  if (e.ctrlKey){
    switch(e.keyCode){
      case 33: // Ctrl + PageUp
      case 34: // Ctrl + PageDown
      case 84: // Ctrl + T
      case 87: // Ctrl + W
        e.stopImmediatePropagation();
        return;
    }
  }
  else{
    switch(e.keyCode){
      case 116: // F5
        e.stopImmediatePropagation();
        return;
    }
  }
};

document.addEventListener("click", unfuckMouse, true);
document.addEventListener("mousedown", unfuckMouse, true);
document.addEventListener("keydown", unfuckKeyboard, true);
