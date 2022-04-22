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

// 0到12的随机数
Math.floor(Math.random()*13);
// 3到12的随机数
Math.floor(Math.random()*10) + 3
// 或者
Math.floor(Math.random() * (13 - 3)) + 3

function random(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}