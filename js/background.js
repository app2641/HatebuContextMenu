
var show_hatebu = chrome.contextMenus.create({
    "title": "このページをはてなブックマークで表示",
    "type": "normal",
    "contexts": ["page"],
    "onclick": function (info, tab) {
        chrome.tabs.sendRequest(tab.id, {type: 'page'});
    }
});


var show_entry = chrome.contextMenus.create({
    "title": "リンク先をはてなブックマークで表示",
    "type": "normal",
    "contexts": ["link"],
    "onclick": function (info, tab) {
        chrome.tabs.sendRequest(tab.id, {type: 'link', link: info.linkUrl});
    }
});

