var storage = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync ? chrome.storage : browser.storage;

chrome.runtime.onStartup.addListener(() => {
    storage.sync.get(['maximizeOnStartup'], function(result) {
        if (result.maximizeOnStartup) {
            chrome.windows.getCurrent((window) => {
                if (window.state !== 'maximized') {
                    chrome.windows.update(window.id, { state: 'maximized' });
                }
            });
        }
    });
});

chrome.windows.onCreated.addListener((window) => {
    storage.sync.get(['maximizeNewWindows'], function(result) {
        if (result.maximizeNewWindows) {
            if (window.state !== 'maximized') {
                chrome.windows.update(window.id, { state: 'maximized' });
            }
        }
    });
});