// ==UserScript==
// @name         Patreon - Click Anywhere to Close Image Dialog
// @description  Close modal image dialog by clicking anywhere on the page.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://www.patreon.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

document.body.addEventListener("click", e => {
	if (e.target.tagName === "IMG" && e.target.getAttribute("data-tag") === "lightboxImage") {
		document.querySelector("[data-tag='close']")?.click();
		e.preventDefault();
		e.stopPropagation();
	}
});
