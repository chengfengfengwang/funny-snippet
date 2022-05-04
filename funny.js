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

// 记录函数调用次数
function sayHi(name) {
    sayHi.count++;
    console.log(`hello ${name}`)
}
sayHi.count = 0 // 初始值
sayHi('a');
sayHi('b'); // count为2
// 函数表达式
let sayHello = function fn (who) { // fn只在函数内部可见
    if (who) {
        console.log(`hello ${who}`);
    } else {
        fn('default name')
    }
}
let welcome = sayHello;
sayHello = null;
welcome()

//计算两个时间点相差几时几分，时间点最多跨今明两天
function getDiff(h1, m1, h2, m2) {
    if (h1 <= h2) {
        const diff = getMinutesToday(h2, m2) - getMinutesToday(h1, m1);
        return `相差${Math.floor(diff/60)}时${diff%60}分`
    } else {
        const diff = getMinutesToday(24, 0) - getMinutesToday(h1, m1) + getMinutesToday(h2, m2);
        return `相差${Math.floor(diff/60)}时${diff%60}分`
    }
}
// 时间点转换成分钟
function getMinutesToday(h, m) {
    return h * 60 + m
}
console.log(getDiff(23,30,01,10));