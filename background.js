console.log("background script fired");

chrome.tabs.onUpdated.addListener(function(){
  var queryInfo = {
    "url": "*://www.facebook.com/"
  };
  chrome.tabs.query(queryInfo, function(tabs){
    if(tabs.length > 0){
      for(tab of tabs){
        chrome.tabs.remove(tab.id, function(){
          console.log("tab removed");
        })
      }
    }
  })
})
