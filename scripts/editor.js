// editor related switches and option
var showLogo = true, 
    showWtm = true, 
    isMiddle = true, 
    textStroke = true,
    textStrokeWidth = 6;
    
// delay function
function saveDelay() {
    let delay = Number(document.querySelector('#delay-rate > input[type="number"]').value);
    let date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `delay=${delay};${expires};path=/`;
}

window.onload = function() {
    console.info("Getting cookie value...")
    let delay = document.cookie.replace(/(?:(?:^|.*;\s*)delay\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (delay) {
        document.querySelector('#delay-rate > input[type="number"]').value = delay;
    }
    document.querySelector('#option-default').click();
}

// tab handler for text options
document.getElementById('tab-handler').addEventListener('click', function(e) {
    if(e.target) {
        var option = e.target.closest('button').dataset.textOption;

        // disable all elements
        Array.from(document.getElementsByClassName('options-tab')).forEach(function(e){e.style.display = 'none'})
        var tabButton = document.getElementsByClassName('tab-btn')[0].children
        Array.from(tabButton).forEach(function(e){e.classList.remove('active')})

        // enable the selected element
        document.getElementById(option).style.display = 'block';
        e.target.closest('button').classList.add('active');
	}
});


if  (window.console) {
     var  cons = console;
     if  (cons) {
console.clear();
let styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
let styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
let styleContent = `
color: rgb(30,152,255);
`
let title1 = '涟漪的P5预告卡制作器'
let title2 = `
##     ## #### ########  #### ########  ########  ##       ########      ######   #######  ##     ## 
##     ##  ##  ##     ##  ##  ##     ## ##     ## ##       ##           ##    ## ##     ## ###   ### 
##     ##  ##  ##     ##  ##  ##     ## ##     ## ##       ##           ##       ##     ## #### #### 
#########  ##  ########   ##  ########  ########  ##       ######       ##       ##     ## ## ### ## 
##     ##  ##  ##   ##    ##  ##        ##        ##       ##           ##       ##     ## ##     ## 
##     ##  ##  ##    ##   ##  ##        ##        ##       ##       ### ##    ## ##     ## ##     ## 
##     ## #### ##     ## #### ##        ##        ######## ######## ###  ######   #######  ##     ##  `
let content = `
更新日期：2022-12-18
主页:  https://hiripple.com
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)
       console.log('%c hiRipple(https://hiripple.com)\n警告：源码来自Github：https://github.com/skyventuree/p5cc','color:red;font-size:10px;');
     }
};
