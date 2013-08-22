chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

    var hatebu_url = 'http://b.hatena.ne.jp/entry/'+location.href.replace(/^http(s):\/\//, '');
    window.open(hatebu_url);
});
