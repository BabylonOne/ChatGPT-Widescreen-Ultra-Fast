# ChatGPT Widescreen Ultra Fast
The fastest ChatGPT widescreen userscript.

Just one line, you don't even have to install a script.

Create a bookmark named "Expand ChatGPT" with the following URL:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);`

Click the bookmark and all ChatGPT chat boxes should expand instantly.

## Simplicity is the ultimate sophistication
✅ Don't use 10 pages of JavaScript when you can use one line

✅ Don't use JavaScript when you can use pure CSS

✅ Don't wait for elements to show when you do not need to

✅ No addEventListener()

✅ No find()

✅ No forEach()

✅ No getElementById()

✅ No matchAll()

✅ No MutationObserver()

✅ No Promise()

✅ No querySelector()

✅ No setAttribute()

✅ No setTimeout()

✅ No window.onload()

✅ No xmlHttpRequest()

✅ No other CPU burning and scroll jittering callback nonsense

## No-Install One-Click Bookmark Activation method

If you don't want to install a script, create a bookmark named "Expand ChatGPT" with the following URL:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);`

Click the bookmark and all ChatGPT chat boxes should expand instantly.

## No-Install URL Copy and Paste Activation Method

You can also copy and paste the same URL directly into the URL bar and press enter:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);`

Note: Some browsers remove the "javascript:" from the URL for security reasons, you may need to manually enter "javascript:" in front of the URL before pressing Enter. Upon pressing Enter, all ChatGPT chat boxes should expand instantly.

## How it works

ChatGPT uses the following TailwindCSS to limit box widths under different screen sizes:

`"md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"`

This script inserts the following CSS rule into the master style sheet:

`.text-token-text-primary > div > div {max-width:100% !important;}`

It overrides TailwindCSS and keeps chat boxes at 100% max-width on all screen sizes, before they are even created.

JavaScript is used only to insert the CSS rule. Once the rule is inserted, it applies to all current and future chat boxes on the same page, no further JavaScript processing is required.

This approach functions without relying on constant page element monitoring, resulting in less rendering lag, especially in lengthy conversations and on less powerful hardware.
