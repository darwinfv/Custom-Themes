let bg = document.getElementById('bg');
let text = document.getElementById('text');

const args = {
    currentWindow: true,
    active: true
}

bg.addEventListener('input', () => {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + bg.value + '";'
    });
});

text.addEventListener('input', () => {
    chrome.tabs.executeScript({
        code: 'document.body.style.color = "' + text.value + '";'
    });
});

document.getElementById('save').onclick = () => {
    chrome.tabs.query(args, (tabs) => {
        let tab = tabs[0].url;
        let host = new URL(tab).hostname;
        let items = {};
        items[host] = bg.value + '|' + text.value;
        chrome.storage.sync.set(items);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query(args, (tabs) => {
        let tab = tabs[0].url;
        let host = new URL(tab).hostname;
        chrome.storage.sync.get(host, (data) => {
            if (data[host]) {
                bg.value = data[host].substring(0, 7);
                text.value = data[host].substring(8);
                chrome.tabs.executeScript({
                    code: 'document.body.style.backgroundColor = "' + bg.value +'";\
                        document.body.style.color ="' + text.value + '";'
                });
            }
        });
    });
});