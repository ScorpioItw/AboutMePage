const bg = document.querySelector('.bg');
window.onload = function () {
    // 启动缩放动画
    bg.style.transform = 'scale(1)';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// 页面时间显示
showTime = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var w = date.getDay();

    // 日期逻辑性优化
    h < 10 ? h = "0" + h : h;
    m < 10 ? m = "0" + m : m;
    month < 10 ? month = "0" + month : month;
    day < 10 ? day = "0" + day : day;

    let Y = document.querySelector('.year');
    Y.innerHTML = year;
    let Mo = document.querySelector('.month');
    Mo.innerHTML = month;
    let D = document.querySelector('.day');
    D.innerHTML = day;
    let H = document.querySelector('.h');
    H.innerHTML = h;
    let M = document.querySelector('.m');
    M.innerHTML = m;

    let W = document.querySelector('.week');

    // 星期个性显示
    let weekArr = ["柒", "壹", "贰", "叁", "肆", "伍", "陆"];
    for (let i = 0; i < weekArr.length; i++) {
        if (w == i) {
            W.innerHTML = weekArr[i];
        }
    }
}

setInterval("showTime()", 1000);


// 判断深色模式
const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDarkMode);

// 页面滚动设置
const bannerRight = document.querySelector('.banner_right');
const bannerRightA = document.querySelector('.banner_right').getElementsByTagName('a');
const bannerRightBg = document.querySelector('.banner_right_bg');

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("滚动距离" + scrollTop);
    if (scrollTop >= 754) {
        bannerRight.style.position = 'fixed';
        bannerRightBg.style.display = 'block';
        for (let i = 0; i < bannerRightA.length; i++) {
            bannerRightA[i].style.color = 'var(--font-color-10)';
        }
    } else {
        bannerRight.style.position = 'absolute';
        bannerRightBg.style.display = 'none';
        for (let i = 0; i < bannerRightA.length; i++) {
            bannerRightA[i].style.color = '#fff'
        }
    }
}

// 页面跳转平滑设置
const bannerBtn = document.querySelector('.bannerBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const workBtn = document.querySelector('.workBtn');
const logBtn = document.querySelector('.logBtn');

bannerBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

var bgCurrent = 0;  // 默认动态
bannerBtn.addEventListener('click', function (e) {
    if (e.pageY < 700) {
        if (bgCurrent == 0) {
            bgFun();
            bgCurrent = 1;
        } else {
            bgVideoFun();
            bgCurrent = 0;
        }
    }
});

aboutBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 754,
        behavior: "smooth"
    })
})

workBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 1508,
        behavior: "smooth"
    })
})

logBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 2262,
        behavior: "smooth"
    })
})


// 收藏效果设置
const logContent = document.querySelector('.log_Content');
logContent.scrollTo({
    left: 9000,
    behavior: "smooth"
})

const bannerTipLogo = document.querySelector('.banner_tip_logo');
const bannerTipContent = document.querySelector('.banner_tip_content');

var bannerTipLogoCurrent = 0;
bannerTipLogo.addEventListener('click', function () {
    if (bannerTipLogoCurrent == 0) {
        bannerTipContent.style.display = 'block';
        bannerTipLogoCurrent = 1;
    } else {
        bannerTipContent.style.display = 'none';
        bannerTipLogoCurrent = 0;
    }
})

