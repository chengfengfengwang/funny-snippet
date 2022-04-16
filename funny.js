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