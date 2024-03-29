var storage = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync ? chrome.storage : browser.storage;

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#maximizeOnStartup').addEventListener('change', saveOptions);
document.querySelector('#maximizeNewWindows').addEventListener('change', saveOptions);

function saveOptions() {
    storage.sync.set({
        maximizeOnStartup: document.querySelector('#maximizeOnStartup').checked,
        maximizeNewWindows: document.querySelector('#maximizeNewWindows').checked
    });
}

function restoreOptions() {
    storage.sync.get(['maximizeOnStartup', 'maximizeNewWindows'], function(result) {
        document.querySelector('#maximizeOnStartup').checked = result.maximizeOnStartup;
        document.querySelector('#maximizeNewWindows').checked = result.maximizeNewWindows;
    });
}