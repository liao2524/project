// $(document).ready(function () {

//     var i = 0;

//     var clone = $(".imgRoll .imgRoll_list a").first().clone();//克隆第一张图片
//     $(".imgRoll .imgRoll_list").append(clone);//复制到列表最后
//     var size = $(".imgRoll .imgRoll_list a").size();
   

//     for (var j = 0; j < size-1; j++) {
//         $(".imgRoll .num").append("<a></a>");
//     }

//     $(".imgRoll .num a").first().addClass("on");

//     /*自动轮播*/

//     var t = setInterval(function () { i++; move();},2000);

//     /*鼠标悬停事件*/

//     $(".imgRoll").hover(function () {
//         clearInterval(t);//鼠标悬停时清除定时器
//     }, function () {
//         t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
//     });




//     /*鼠标滑入原点事件*/

//     $(".imgRoll .num a").hover(function () {

//         var index = $(this).index();//获取当前索引值
//         i = index;
//         $(".imgRoll .imgRoll_list").stop().animate({ left: -index * 500 }, 500);
//         $(this).addClass("on").siblings().removeClass("on");
//     });



//     /*向左按钮*/
//     $(".imgRoll .imgRoll_pre").click(function () {
//         i++;
//         move();
//     });

    
//     /*向右按钮*/
//     $(".imgRoll .imgRoll_next").click(function () {
//         i--;
//         move();
//     });

//     /*移动事件*/
//     function move() {
//         if (i == size) {
//             $(".imgRoll .imgRoll_list").css({ left: 0 });
//             i = 1;
//         }
//         if (i == -1) {
//             $(".imgRoll .imgRoll_list").css({ left: -(size - 1) * 500 });
//             i = size - 2;
//         }
//         $(".imgRoll .imgRoll_list").stop().animate({ left: -i * 500 }, 500);

//         if (i == size - 1) {
//             $(".imgRoll .num a").eq(0).addClass("on").siblings().removeClass("on");
//         } else {
//             $(".imgRoll .num a").eq(i).addClass("on").siblings().removeClass("on");
//         }
//     }
// });

$(document).ready(function () {
    var i = 0;
    var clone = $(".imgRoll .imgRoll_list li").first().clone();//克隆第一张图片
    $(".imgRoll .imgRoll_list").append(clone);//复制到列表最后
    var size = $(".imgRoll .imgRoll_list li").size();
    // alert(size);
    // alert("something");

    for (var j = 0; j < size-1; j++) {
        $(".imgRoll .num").append("<li></li>");
        /*alert("something");*/
    }

    $(".imgRoll .num li").first().addClass("on");

    /*自动轮播*/

    var t = setInterval(function () { i++; move();},2000);

    /*鼠标悬停事件*/

    $(".imgRoll").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
    });




    /*鼠标滑入原点事件*/

    $(".imgRoll .num li").hover(function () {

        var index = $(this).index();//获取当前索引值
        i = index;
        $(".imgRoll .imgRoll_list").stop().animate({ left: -index * 755 }, 500);
        $(this).addClass("on").siblings().removeClass("on");
    });



    /*向左按钮*/
    $(".imgRoll .btn_l").click(function () {
        i--;
        move();
    });

    
    /*向右按钮*/
    $(".imgRoll .btn_r").click(function () {
        i++;
        move();
    });

    /*移动事件*/
    function move() {
        if (i == size) {
            $(".imgRoll .imgRoll_list").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {
            $(".imgRoll .imgRoll_list").css({ left: -(size - 1) * 755 });
            i = size - 2;
        }
        $(".imgRoll .imgRoll_list").stop().animate({ left: -i * 755 }, 500);

        if (i == size - 1) {
            $(".imgRoll .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".imgRoll .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});
