// ==UserScript==
// @name         ChatGPT Widescreen Ultra Fast (Simple one line CSS edit, No-Install URL method included)
// @id           ChatGPT_Widescreen_Ultra_Fast@https://github.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast
// @version      2024.5.2.0
// @match        *://chat.openai.com/*
// @author       Alex Yam
// @license      MIT; https://spdx.org/licenses/MIT.html
// @description  Simplicity is the ultimate sophistication. Don't use 10 pages of JavaScript when you can use one line. Don't use JavaScript when you can use pure CSS. Don't wait for elements to show when you don't need to. No fancy JavaScript window.onload(), addEventListener("DOMContentLoaded"), Promise(), MutationObserver(), setTimeout(), querySelector(), or any other CPU burning and scroll jittering callback nonsense. (Also includes a No-Install URL method, read first comment in code).
// @namespace    https://github.com/BabylonOne
// @homepage     https://github.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast
// @homepageURL  https://github.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast
// @downloadURL  https://raw.githubusercontent.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast/main/ChatGPT-Widescreen-Ultra-Fast.js
// @updateURL    https://raw.githubusercontent.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast/main/ChatGPT-Widescreen-Ultra-Fast.js
// @supportURL   https://github.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast/issues
// @compatible   chrome
// @compatible   edge
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @grant        GM_addStyle
// ==/UserScript==

/*
/ *** No-Install One-Click Bookmark Activation method ***
/
/ If you don't want to install a script, create a bookmark with the following URL:
/
/     javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);
/
/ Click the bookmark and ChatGPT chat boxes should expand instantly.
*/

/*
/ *** No-Install URL Copy and Paste Activation method ***
/
/ You can also copy and paste the same URL directly into the URL bar and press enter:
/
/     javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);
/
/ Note: Some browsers remove the "javascript:" from the URL for security reasons, you may need to manually input "javascript:"
/       at the start of the URL before pressing Enter. ChatGPT chat boxes should expand instantly upon pressing Enter.
*/

/*
/ Simplicity is the ultimate sophistication.
/
/ Don't use 10 pages of JavaScript when you can use one line.
/ Don't use JavaScript when you can use pure CSS.
/ Don't wait for elements to show when you do not need to.
/
/ No fancy JavaScript window.onload(), addEventListener("DOMContentLoaded"),
/ Promise(), MutationObserver(), setTimeout(), querySelector(), or any other
/ CPU burning and scroll jittering callback nonsense.
/
/ The ChatGPT interface uses TailwindCSS, each response box contains a
/ "md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"
/ to set a max width on chat boxes under different screen sizes.
/
/ This script inserts a max-width CSS rule with the "!important" flag to the master style sheet,
/ to keep the chat boxes at max width before they are even created.
/
/ OpenAI: How about spend $100 and hire a highschool student to add a max screen width setting,
/ or ask ChatGPT 3.5 how to do it, it's not hard.
*/

GM_addStyle(".text-token-text-primary>div>div{max-width:100%!important}");
