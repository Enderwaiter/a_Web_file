$(function () {
    setInterval(function () {
        $('.loading').fadeOut();
    },1300);
})

var imgs = document.getElementsByClassName('imgb');
var point = 0;
var next = 1;

setInterval(function () {
    if(point == 12){
        point = 0;
    }//循环
    if(next == 12){
        next = 0;
    }
    imgs[point].style.zIndex=2;
    imgs[next].style.zIndex=3;
    change(imgs[next]);
    //下标自增
    point++;
    next++;
},8000);

//淡入淡出
function change(element) {
    Opacity(element, 0);
    for(var i=0; i<=100; i++){
        (function (x) {
            setTimeout(function () {
                Opacity(element, 1/100*x);
                if( x == 100 ){
                    imgs[point-1].style.zIndex=1;
                }
            },8*x);
        })(i);
    }
}

//透明
function Opacity(ele, val){
    if(ele.filters){
        ele.style.filter = "alpha(opacity=" + val*100 + ")";
    }else{
        ele.style.opacity = val;
    }
}

//卡片背景
function load2D_bg(){
    var background = document.getElementById("bgcard");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
                    
            background.style.backgroundPositionX = xValue * 1 -200+ "px";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}

//立绘
function load2D_lihui(){
    var background = document.getElementById("lihui");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var xValue = calcValue(x, window.innerWidth);

            background.style.left = xValue * 0.8-100 + "px";
            
        })
    },false);
}
