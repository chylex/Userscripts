// ==UserScript==
// @name         Old Wikipedia Design
// @description  Reverts to the old Vector design.
// @author       Vusys, chylex
// @version      1
// @license      MIT
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://*.wikipedia.org/*
// @exclude      https://*.wikipedia.org/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
	function fixUrl(href) {
		const url = new URL(href);
		url.searchParams.set("useskin", "vector");
		return url.href;
	}
	
	if (!window.location.search.includes("useskin=")) {
		location.replace(fixUrl(window.location.href));
		return;
	}
	
	for (const a of document.getElementsByTagName("a")) {
		if (a.hostname.includes("wikipedia.org")) {
			a.href = fixUrl(a.href);
		}
	}
})();
