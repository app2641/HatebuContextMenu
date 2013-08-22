
var context = chrome.contextMenus.create({
    "title": "このページをはてなブックマークで表示",
    "type": "normal",
    "contexts": ["page"],
    "onclick": function (info, tab) {
        chrome.tabs.sendRequest(tab.id, {});
    }
});

