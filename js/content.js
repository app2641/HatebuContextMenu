chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var url;

    // リクエストタイプで処理を振り分ける
    switch (request.type) {
        case 'page':
            // 表示しているページをはてブで表示させる
            url = 'http://b.hatena.ne.jp/entry/'+location.href;
            break;

        case 'link':
            // 指定リンクをはてブで表示する
            url = 'http://b.hatena.ne.jp/entry/'+request.link;
            break;
    }

    window.open(url);
});
