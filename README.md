## Userscripts
This repository contains my userscripts and userstyles (custom scripts and styles) for various websites. Most of them are licensed under [MPL-2.0](LICENSE.txt), but you can see the license and additional authors of each individual script or style in the metadata comment at the top of the file.

## How to Install
If you don't already have a userscript or userstyle manager installed in your browser, I would recommend one of these:

* **Userscript managers**
  * [Violentmonkey](https://violentmonkey.github.io/get-it/) (**Firefox 57+**, **Chrome**)
  * [Tampermonkey](https://tampermonkey.net/) (**Edge**, **Opera**, **Safari**)
  * [Greasemonkey 3](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/versions/?page=1#version-3.17) (**Firefox 56 or older**, make sure to prevent it from updating)
* **Userstyle managers**
  * [Stylus](https://github.com/openstyles/stylus)

Pick whichever scripts or styles you want from the list below, and click the link to install them. The userscript or userstyle manager will automatically update all installed scripts, however since these scripts and styles are quite simple and updates may change how they work, each of them has an alternative link that will never update.

Before you [report an issue](https://github.com/chylex/Userscripts/issues/new) (bug report or feature request), please make sure you're using the most recent version of that script or style, and search for [existing issues](https://github.com/chylex/Userscripts/issues) in case it's already been reported.

## Summary

<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="1">(General)</th>
            <td width="325px"><a href="#stop-fucking-with-my-mouse--keyboard">Stop Fucking With My Mouse & Keyboard</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>
<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="1">Discord</th>
            <td width="325px"><a href="#discord-history-tracker">Discord History Tracker</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>
<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="1">OpenEye</th>
            <td width="325px"><a href="#load--filter-openeye-crashes">Load & Filter OpenEye Crashes</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>
<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="1">Reddit</th>
            <td width="325px"><a href="#wholesome-reddit">Wholesome Reddit</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>
<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="1">Twitch</th>
            <td width="325px"><a href="#transparent-twitch-chat">Transparent Twitch Chat</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>
<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="5">YouTube</th>
            <td width="325px"><a href="#activity-check-removal">Activity Check Removal</a></td>
            <td>Script</td>
        </tr>
        <tr>
            <td><a href="#block-youtube-playlists">Block YouTube Playlists</a></td>
            <td>Script</td>
        </tr>
        <tr>
            <td><a href="#fix-youtube-fullscreen-text-selection">Fix YouTube Fullscreen Text Selection</a></td>
            <td>Script</td>
        </tr>
        <tr>
            <td><a href="#hide-youtube-seek-bar--duration">Hide YouTube Seek Bar & Duration</a></td>
            <td>Script</td>
        </tr>
        <tr>
            <td><a href="#theater-fullscreen--transparent-chat">Theater Fullscreen + Transparent Chat</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>
<table>
    <tbody>
        <tr>
            <th width="110px" rowspan="1">Wikipedia</th>
            <td width="325px"><a href="#old-design">Old Design</a></td>
            <td>Script</td>
        </tr>
    </tbody>
</table>

## Userscripts

### (General)

#### Stop Fucking With My Mouse & Keyboard
Prevents websites from hijacking middle-clicks, right-clicks, and common keyboard shortcuts.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/(General)/StopFuckingWithMyMouseAndKeyboard.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/ff40cc2db10ae93648348a86f1e49a1d0f9eb3cc/(General)/StopFuckingWithMyMouseAndKeyboard.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/(General)/StopFuckingWithMyMouseAndKeyboard.user.js) \]

---
### Discord

#### Discord History Tracker
Lets you locally save chat history in your servers, groups, and private conversations.  
\[ [External link](https://dht.chylex.com) \]

---
### OpenEye

#### Load & Filter OpenEye Crashes
Adds a button to load all pages in the [Crashes](https://openeye.openmods.info/crashes?page=1) tab, and filter out unwanted crashes. Configurable at the beginning of the script.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/OpenEye/LoadAllPages.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/77f4f1a9a007a907bea94599f4ccabddff40b159/OpenEye/LoadAllPages.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/OpenEye/LoadAllPages.user.js) \]

---
### Reddit

#### Wholesome Reddit
Hides the downvote button, and forces the upvote button to be always visible.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/Reddit/WholesomeReddit.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/8ce80b4fc8cfc612bb6301484fd933f9e6dafcce/Reddit/WholesomeReddit.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/Reddit/WholesomeReddit.user.js) \]

---
### Twitch

#### Transparent Twitch Chat
Overlays Twitch chat over the video to save space. Includes many customizations regarding the chat layout and opacity, text filters, and options to hide chat elements and badges for less clutter.  
\[ [External link](https://github.com/chylex/Transparent-Twitch-Chat) \]

<img src="https://repo.chylex.com/transparent-twitch-chat.png?" width="400">

---
### YouTube

#### Activity Check Removal
Removes activity check that interrupts video playback. **This script is obsolete**.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/YouTube/ActivityCheckRemoval.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/2ddfdcd8cffb796830ff04847f43f2bf91fb0ffc/YouTube/ActivityCheckRemoval.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/YouTube/ActivityCheckRemoval.user.js) \]

#### Block YouTube Playlists
Removes playlists from YouTube video URLs.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/YouTube/BlockPlaylists.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/b74c26ed01640db4f6d0a06f67d6e25627fb07be/YouTube/BlockPlaylists.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/YouTube/BlockPlaylists.user.js) \]

#### Fix YouTube Fullscreen Text Selection
Prevents accidentally selecting text when double-clicking the video to toggle fullscreen.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/YouTube/FixFullscreenTextSelection.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/34937d0a1d6b53f0ef10aa8e2ff5787f905e4090/YouTube/FixFullscreenTextSelection.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/YouTube/FixFullscreenTextSelection.user.js) \]

#### Hide YouTube Seek Bar & Duration
Hides all mentions of video durations by default. Press 'AltGr' to toggle.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/YouTube/HideSeekBarAndDuration.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/f963a6c53e0fd46ef7156f9c7439053e6302b2b6/YouTube/HideSeekBarAndDuration.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/YouTube/HideSeekBarAndDuration.user.js) \]

#### Theater Fullscreen + Transparent Chat
In theater mode, it expands video to full screen, makes chat transparent and overlays it over the video. Note that colors of images in chat will be inverted, and the player controls may behave strangely. **Requires classic YouTube layout,** you can use the third-party [Youtube - Restore Classic](https://greasyfork.org/en/scripts/34818-youtube-restore-classic) script for that.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/YouTube/TheaterFullscreenTransparentChat.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/f8fcfdf456580f65750f6cf1fd58bcd69a553949/YouTube/TheaterFullscreenTransparentChat.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/YouTube/TheaterFullscreenTransparentChat.user.js) \]

<img src="https://repo.chylex.com/transparent-youtube-chat.png?" width="400">

---
### Wikipedia

#### Old Design
Reverts to the old Vector design.  
\[ [Automatically updated](https://github.com/chylex/Userscripts/raw/master/Wikipedia/OldDesign.user.js) \]
\-
\[ [Manually updated](https://github.com/chylex/Userscripts/raw/2b6bad9b2ba7a25c99e5f5b705de61e3661e89ef/Wikipedia/OldDesign.user.js) \]
\-
\[ [Source code](https://github.com/chylex/Userscripts/blob/master/Wikipedia/OldDesign.user.js) \]
