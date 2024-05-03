# ChatGPT Widescreen Ultra Fast
The fastest Chat-GPT widescreen userscript.

Just one line, you don't even have to install a script.

Create a bookmark named "Expand ChatGPT" with the following line as the URL:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100% !important}',0);`

Click the bookmark and ChatGPT chat boxes should expand instantly.

## Simplicity is the ultimate sophistication
✅ Don't use 10 pages of JavaScript when you can use one line

✅ Don't use JavaScript when you can use pure CSS

✅ Don't wait for elements to show when you do not need to

✅ No addEventListener("DOMContentLoaded")

✅ No MutationObserver()

✅ No Promise()

✅ No querySelector()

✅ No setTimeout()

✅ No window.onload()

✅ No any other CPU burning and scroll jittering callback nonsense

## Even faster, a No-Install One-Click Bookmark Activation method
If you don't have time to install a script, use this URL Bookmark method instead.

Create a bookmark with the following URL:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100% !important}',0);`

Click the bookmark and ChatGPT chat boxes should expand instantly.

## URL Copy and Paste Activation method

You can also copy and paste the same URL directly into the URL bar and press enter:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100% !important}',0);`

Note: Some browsers remove the "javascript:" from the URL for security reasons, you may need to manually input "javascript:" at the start of the URL before pressing Enter. ChatGPT chat boxes should expand instantly upon pressing Enter.

## How it works
The ChatGPT interface uses the following TailwindCSS for max width under different screen sizes:

`"md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"`

This script inserts into the master style sheet, an overriding max-width CSS rule (with the "!important" flag), to keep the chat boxes at max width before they are even created:

`.text-token-text-primary > div > div {max-width:100% !important;}`
