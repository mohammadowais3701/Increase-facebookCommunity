chrome.runtime.sendMessage({data: "open"}, function(response) {
    console.log(response.farewell);
  });