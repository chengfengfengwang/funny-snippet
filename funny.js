// script tag has load event fire
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.body.append(script);
}
loadScript('/qwe', () => {
    console.log('hhhhh')
})

// 全局input only number
document.addEventListener('input', function(e) {
    const target = e.target;
    const classList = Array.from(target.classList)
    if (classList.indexOf('input_number') !== -1) {
        target.value = target.value.replace(/[^\d]/g, '')
    }
})