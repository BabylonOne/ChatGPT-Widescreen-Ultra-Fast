// ==UserScript==
// @name         ChatGPT Widescreen Ultra Fast (Simple one line CSS edit, No-Install URL method included)
// @id           ChatGPT_Widescreen_Ultra_Fast@https://github.com/BabylonOne/ChatGPT-Widescreen-Ultra-Fast
// @version      2024.5.1.0
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
/ No-Install URL method:
/     If you don't want to install a script, here is a No-Install URL method,
/     On your ChatGPT chat page, paste the following URL into your URL bar and press enter:
/
/         javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);
/
/    Chat boxes should instantly become max width upon pressing enter (if "javascript:" is not removed from the URL)
/
/    Note:
/        Some browsers automatically remove the "javascript:" from the URL for security reason,
/        you may need to manually type or paste "javascript:" at the front of the URL, before pressing Enter.
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
