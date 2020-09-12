document.getElementById('bg').addEventListener('input', () => {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + bg.value + '";'
    });
});

document.getElementById('text').addEventListener('input', () => {
    chrome.tabs.executeScript({
        code: 'document.body.style.color = "' + text.value + '";'
    });
});