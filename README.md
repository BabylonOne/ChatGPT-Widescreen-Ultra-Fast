# ChatGPT Widescreen Ultra Fast
The fastest Chat-GPT widescreen userscript.

Just one line, you don't even have to install a script, just paste one line into the browser URL bar.

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

## Even faster, a No-Install URL method
If you don't even have time to install a script, use this instant URL copy and paste method.

Copy and paste the following into your ChatGPT URL bar and press enter:

`javascript:document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100% !important}',0);`

Chat boxes should instantly expand to maximum width upon pressing enter (if "javascript:" is not removed from the URL)

Note: Some browsers removes the "javascript:" from the URL for security reason, you may need to manually input "javascript:" at the start of the URL before pressing Enter.

## How it works
The ChatGPT interface uses the following TailwindCSS for max width under different screen sizes:

`"md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"`

This script inserts into the master style sheet, an overriding max-width CSS rule (with the "!important" flag), to keep the chat boxes at max width before they are even created:

`.text-token-text-primary > div > div {max-width:100% !important;}`
