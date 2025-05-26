// ==UserScript==
// @name         Vim Bindings
// @description  Reformats the Vim index help page and adds custom notes to each binding.
// @author       chylex
// @version      1
// @license      MIT
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      https://vimhelp.org/index.txt.html
// @run-at       document-end
// @grant        none
// ==/UserScript==

const settings = loadSettings();

function loadSettings() {
	try {
		const json = localStorage.getItem("vim_binding_settings");
		return json === null ? {} : JSON.parse(json);
	} catch (e) {
		console.error("Could not load binding settings", e);
		return null;
	}
}

function saveSettings() {
	localStorage.setItem("vim_binding_settings", JSON.stringify(settings));
}

appendElement(document.head, "style").textContent = `
#vh-content {
  flex: 1 1 auto;
}

#vh-content pre {
  width: 100%;
  margin: 0;
}

table {
  border-collapse: collapse;
}

tr.h {
  border-bottom: 2px dashed var(--aqua);
}

tr.h td, tr:has(+ tr.subsection) td {
  padding-bottom: 12px;
}

tr.h + tr td, tr.subsection + tr td {
  padding-top: 12px;
}

td {
  padding: 2px 8px;
}

td:first-child {
  padding-left: 0;
}

td:last-child {
  padding-right: 0;
}

tr.subsection td {
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 1px dashed var(--aqua);
  border-bottom: 1px dashed var(--aqua);
}

tr[data-binding-value="used"],
tr[data-binding-value="changed"],
tr[data-binding-value="rebound"],
tr[data-binding-value="not-used"] {
  opacity: 0.35;
}

tr.missing {
  opacity: 0.35;
  text-decoration: line-through;
}

select {
  border: 0;
  padding: 3px 5px;
  font-size: 0.82rem;
}

select, select option {
  font-family: monospace;
  text-align: center;
}
`;

let headingIndex = 0;

/** @var {Object<string, HTMLSelectElement[]>} */
const selectsByBinding = {};

for (const headingEle of document.querySelectorAll("span[class='h']:has(+ span[class='h'])")) {
	const delimiterEle = headingEle.nextElementSibling;
	
	const columnNames = headingEle.textContent.split(/(?<!^)(?:\t+\s*|(?<=note ))(?!$)/).map(name => name.trim());
	
	const tableEle = document.createElement("table");
	addHeadingRow(tableEle, columnNames);
	
	let currentNode = delimiterEle.nextSibling;
	let html = "";
	
	while (currentNode !== null && !isTagWithClass(currentNode, "SPAN", "h")) {
		html += currentNode.nodeType === Node.ELEMENT_NODE ? currentNode.outerHTML : currentNode.textContent;
		
		const nextNode = currentNode.nextSibling;
		currentNode.remove();
		currentNode = nextNode;
	}
	
	for (const line of html.split(/\n(?=<a|\t{1,3}[^\t]|\n)/)) {
		addContentRow(tableEle, line, columnNames);
	}
	
	headingEle.insertAdjacentElement("beforebegin", tableEle);
	headingEle.remove();
	delimiterEle.remove();
	
	++headingIndex;
}

function isColumnRightAligned(columnName) {
	return columnName === "note";
}

function addHeadingRow(table, columnNames) {
	const tr = appendElement(table, "tr");
	tr.classList.add("h");
	
	appendElement(tr, "td");
	
	for (const columnName of columnNames) {
		const td = appendElement(tr, "td");
		td.innerText = columnName;
		
		if (isColumnRightAligned(columnName)) {
			td.style.textAlign = "right";
		}
	}
}

function addContentRow(table, line, columnNames) {
	if (line.includes("Meta characters (0x80 to 0xff, 128 to 255)")) {
		return;
	}
	
	// console.info(line);
	
	const columnCount = columnNames.length;
	const matches = line.match(/^(?:(<a .+?<\/a>)\s+|\t{2})(.*?)(?:(?:\t+?\s*| {2}\t*|(?<=] )|(?<=<span class="s">{.+?}<\/span> (?!(?:<a .+?class="s">.+?<\/a> )?<span class="s">{.+?}<\/span>)))(?:(\d+(?:,\d+)*)\s+)?(.*))?$/s);
	
	if (matches === null) {
		addSubsectionRow(table, line, columnCount);
		return;
	}
	
	/** @var {HTMLTableRowElement} */
	const tr = appendElement(table, "tr");
	
	/** @var {HTMLTableCellElement[]} */
	const tds = [ appendElement(tr, "td") ];
	
	for (let matchIndex = 1; matchIndex < matches.length; matchIndex++) {
		let td = tds[tds.length - 1];
		
		if (matchIndex <= columnCount) {
			tds.push(td = appendElement(tr, "td"));
			
			if (isColumnRightAligned(columnNames[matchIndex - 1])) {
				td.style.textAlign = "right";
			}
		}
		else if (td.innerHTML.length > 0) {
			td.innerHTML += " ";
		}
		
		const match = matches[matchIndex];
		if (match !== undefined) {
			td.innerHTML += match
				.replaceAll("\t", "")
				.replace(/\n\s*/g, " ")
				.replace("<MiddleMouse>", "&lt;MiddleMouse&gt;")
				.trim();
		}
	}
	
	const bindingElements = tds[1].getElementsByClassName("l");
	
	if (bindingElements.length === 1) {
		const binding = bindingElements[0].innerText;
		const select = appendElement(tds[0], "select");
		
		addOption(select, "TBD", "");
		addOption(select, "Used", "used");
		addOption(select, "Changed", "changed");
		addOption(select, "Rebound", "rebound");
		addOption(select, "Interested", "interested");
		addOption(select, "Not Used", "not-used");
		
		const loadedValue = settings[binding];
		select.value = loadedValue ?? "";
		tr.setAttribute("data-binding-value", loadedValue);
		
		select.addEventListener("change", _ => {
			const newValue = select.value;
			
			for (const otherSelect of selectsByBinding[binding]) {
				if (otherSelect !== select) {
					otherSelect.value = newValue;
				}
				
				otherSelect.closest("tr").setAttribute("data-binding-value", newValue);
			}
			
			if (!newValue) {
				delete settings[binding];
			}
			else {
				settings[binding] = newValue;
			}
			
			saveSettings();
		});
		
		if (!(binding in selectsByBinding)) {
			selectsByBinding[binding] = [];
		}
		
		selectsByBinding[binding].push(select);
	}
	else {
		tr.classList.add("missing");
	}
}

function addSubsectionRow(table, line, columnCount) {
	const text = line.trim();
	if (text.length === 0) {
		return;
	}
	
	/** @var {HTMLTableRowElement} */
	const tr = appendElement(table, "tr");
	tr.classList.add("subsection");
	
	/** @var {HTMLTableCellElement} */
	const td = appendElement(tr, "td");
	td.innerHTML = text;
	td.colSpan = columnCount;
}

function isTagWithClass(node, tagName, className) {
	return node.nodeType === Node.ELEMENT_NODE && node.tagName === tagName && node.classList.contains(className);
}

function appendElement(target, tagName) {
	const ele = document.createElement(tagName);
	target.appendChild(ele);
	return ele;
}

function addOption(select, name, value) {
	const option = appendElement(select, "option");
	option.innerText = name;
	option.value = value;
}
