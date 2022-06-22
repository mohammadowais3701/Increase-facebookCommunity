chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.data=="open"){
      console.log("Targeted Page");
    }

  })











// chrome.action.onClicked.addListener((tab) => {
//     console.log(tab.url);

//   });


//   chrome.runtime.onInstalled.addListener(() => {
//     // Replace all rules ...
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       // With a new rule ...
//       chrome.declarativeContent.onPageChanged.addRules([
//         {
     
//           conditions: [
//             new chrome.declarativeContent.PageStateMatcher({
//               pageUrl: { urlMatches: 'https://www.google.com/*' }, 
//             }),
//             new chrome.declarativeContent.PageStateMatcher({
//               pageUrl: { urlMatches: 'https://www.facebook.com/*' },
//             }) 
//           ],
//           // And shows the extension's page action.
//           actions: [ new chrome.declarativeContent.ShowAction() ]
//         }
//       ], function callback(details) {
//         console.log("chrome.declarativeContent.onPageChanged.addRules callback");
//         console.log(details);
//       });
//     });
//   });
//   chrome.action.onClicked.addListener(function(tab) {
//      console.log(tab.url);
//   });