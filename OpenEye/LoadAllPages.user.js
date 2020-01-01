// ==UserScript==
// @name         Load & Filter OpenEye Crashes
// @description  Adds a button to load all pages in the 'Crashes' tab, and filter out unwanted crashes. Configurable at the beginning of the script.
// @version      1
// @license      MPL-2.0
// @namespace    https://chylex.com
// @homepageURL  https://github.com/chylex/Userscripts
// @supportURL   https://github.com/chylex/Userscripts/issues
// @include      http://openeye.openmods.info/crashes
// @include      https://openeye.openmods.info/crashes
// @include      http://openeye.openmods.info/crashes?page=1
// @include      https://openeye.openmods.info/crashes?page=1
// @run-at       document-end
// ==/UserScript==

var checkedCombinations = {
//    "java.lang.NullPointerException": [
//        "cpw.mods.fml.client.FMLClientHandler.getCurrentLanguage()",
//        "net.minecraft.item.ItemStack.func_77960_j()",
//        "com.mumfrey.liteloader.launch.LiteLoaderTweaker$StartupState.gotoState()"
//    ],
//    "java.lang.RuntimeException": [
//        "net.minecraftforge.common.Configuration.load()"
//    ],
//    "java.lang.NoClassDefFoundError": [
//        "java.lang.Class.getDeclaredConstructors0()"
//    ],
//    "java.lang.ClassCastException": [
//        ""
//    ],
//    "cpw.mods.fml.common.LoaderException": [
//        "cpw.mods.fml.common.LoadController.transition()"
//    ]
};

var maxModsInReport = 9000;

// handling

if (typeof $ == "undefined"){
    var $ = unsafeWindow.jQuery;
}

var statDuplicates = 0;
var statUnwanted = 0;
var statTooManyMods = 0;

$(document).ready(function(){
    var mainDiv = $("table").parent();
    mainDiv.prepend("<button id='chylexButton' class='btn btn-default' onclick='chylexLoadAllPages()'>Load all pages</button> <span id='chylexStatus' class='btn btn-default' style='display:none'></span><br>");
    
    $("th.col-md-2").css("width", "8%"); // Date
    $("th.col-md-6").css("width", "8%"); // Note
    $("th.col-md-1").css("width", "1%"); // Reports

    unsafeWindow.chylexLoadAllPages = function(){
        processTable();
        $("#chylexButton").hide();
        $("#chylexStatus").show();
        
        var divClasses = $("ul.pagination:first").parent().attr("class").split(/\s+/), totalPages = 0;
        
        for(var a = 0; a < divClasses.length; a++){
            if (divClasses[a].indexOf("pages-") == 0){
                totalPages = parseInt(divClasses[a].substring(6), 10);
                break;
            }
        }
        
        $("ul.pagination").each(function(){
            $(this).remove();
        });
        
        loadPage(2, totalPages);
    }
});

function processTable(){
    var td, exceptionName, exceptionCode, exceptionCodeFull;
    var stored = [];
    
    $("tr").each(function(){
        td = $($(this).children()[1]);
        
        exceptionName = $(td.children()[0]).text();
        exceptionCodeFull = td.text().trim().substring(exceptionName.length).trim();
        exceptionCodeFull = exceptionCodeFull.substring(0, exceptionCodeFull.indexOf("  "));
        exceptionCode = exceptionCodeFull.substring(0, exceptionCodeFull.indexOf(":") - 1);
        
        if (stored.indexOf(exceptionName + exceptionCodeFull) >= 0){
            $(this).remove();
            ++statDuplicates;
        }
        else if (shouldRemove(exceptionName, exceptionCode)){
            $(this).remove();
            ++statUnwanted;
        }
        else if (td.children("span.label-primary").size() > maxModsInReport){
            $(this).remove();
            ++statTooManyMods;
        }
        else{
            stored.push(exceptionName + exceptionCodeFull);
        }
    });
}

function loadPage(id, total){
    $("#chylexStatus").text("Loading page " + id + "/" + total);
    var _id = id;
    var _total = total;
    
    $.get("https://openeye.openmods.info/crashes?page=" + id, function(data){
        data = data.substring(data.indexOf("<tbody>") + 7).trim();
        data = data.substring(0, data.indexOf("</tbody>")).trim();
        
        $("tbody").append(data);
        processTable();
        
        if (_id < total){
            loadPage(_id + 1, _total);
        }
        else{
            $("#chylexStatus").text("All pages loaded! Removed " + statDuplicates + " duplicates, " + statUnwanted + " unwanted and " + statTooManyMods + " with too many mods!");
        }
    }).fail(function(){
        alert("Failed fetching data from OpenEye.");
    });
}

function shouldRemove(name, code){
    return name in checkedCombinations && checkedCombinations[name].indexOf(code) >= 0;
}
