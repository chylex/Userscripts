// ==UserScript==
// @name         YouTube Activity Check Removal
// @description  Removes activity check that interrupts video playback.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://youtube.com/*
// @include      https://*.youtube.com/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

var timeout = 0;

var check = setInterval(function(){
  if (_yt_www.J){
    clearInterval(check);
    
    var prev = _yt_www.J;

    _yt_www.J = function(cls){
      if (cls && cls.startsWith("youthere-")){
        return null;
      }

      return prev.apply(this, arguments);
    };
  }
  else if (++timeout > 500){ // average should be about 5-10
    clearInterval(check);
  }
}, 1);
