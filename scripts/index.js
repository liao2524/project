
var commentCount = "";
var praiseCount ="" ;
var imgSrc = "";
var imgAfterSrc = "images/item/itemIdea.gif";
var imgJoinSrc = "images/item/focus.jpeg";
var imgJoinRightSrc = "";
var imgJoinLeftSrc = "images/item/itemFocus_left.png";
var imgLargeSrc="images/item/itemGucci.jpg";
var JoinTextStr = '9 张图带你看那一代老派互联网科技公司的起落';
var joinH3Str = "沃尔玛引入扫描货架机器人，速度比人类快三倍";
var descStr = '宇宙最大烟火表演”激动人心';
var descLargeStr = '日本小镇特产走出大山，靠的是一座废料搭起来的酿酒厂';
var timeStrSrc = "双中子星并合";
var categoryStrSrc = "美图投资的";


var counts="";
var itemSign=0;
var sign = 0;
var scrollCount=0;



$(document).ready(function () {

    headerChange();

    divCount(16,0);


    window.onscroll = function () {
        var tur = true;
        var scrollTop=$(window).scrollTop();
        var contentHeigth = $('#content').height();
        $('.loading').show();
        if (tur) {
            if(scrollTop>contentHeigth-300&&scrollCount<4){
                setTimeout('divCount(10,1)',1500);
                scrollCount+=1; 
            }else if(scrollCount===4){
                $('.loading').hide();
            }
            $(".allNav_list").css('display', 'none');
            tur = false; 
        } 
    };


    $('.showmore_btn').click(function() {
        $('.loading').show();
        setTimeout('divCount(10,1)',3000);   
        scrollCount=1;
    });
});





/*
function loadingTime(counts)
{   
    divCount(counts,1);
    $('.loading').hide();
}*/


function divCount(TagCount,scrollCount) {
    $.get('http://localhost:8081/indexData', function(data) {
        var serverData = JSON.parse(data);
        var itemDateList = serverData.itemDataList  ;  //获取item数据
        var rollDataList = serverData.loopEntrylist;   //获取轮播图数据
        rollDataManage(rollDataList);                  //轮播图数据处理
        itemDataManage(TagCount,itemDateList,scrollCount);         //item数据处理

    });
}



function rollDataManage(rollDataList) {
    for (var i = 0; i < rollDataList.length; i++) {
        var rollData =rollDataList[i];
        addRollData(rollData);
    }
    roll();
  } 

function itemDataManage(TagCount,itemDateList,scrollCount) {
    for (var j = 0; j < TagCount; j++) {
        var typeVal = Math.random();
        if(j<4){
            $itemContent=createTagItem(100,itemDateList);
        }
        if (j===4&&scrollCount===0) {
            $itemContent=createTagItem(300,itemDateList);
        }

        if (typeVal<=0.8&&j>4) {
            $itemContent=createTagItem( 100,itemDateList);
            sign += 1;
        }else if(j>4){
            if (sign==3) {
                $itemContent=createTagItem(100,itemDateList);
                sign += 1;
            }else{
                $itemContent=createTagItem(200,itemDateList);
                sign += 2;
            }
        }
        if (itemSign===4) {
            itemSign=0;
        }
        if (sign===4) {
            sign=0;
        }     
    }
    scrollCount+=1;
    //item数添加到div里面
    function createTagItem(type,itemDateList){
        var itemData = itemDateList[itemSign];
        if(100 === type){
             createNormalItem(itemData);
             itemSign++; 
        } 
        if(200 === type){
             createLagerItem(itemData);
        }
        if (300 === type) {
            createItemJoin();
        }
    }
}


function createNormalItem(itemData) {
    var $item = $('.itemLear');
    var aTag = '<a href="item.html">'+
                '<div class="item_img">'+
                    '<img src="'+itemData.imgSrc+'">'+
                    '<span>'+"娱乐"+'</span>'+
                '</div>'+
                '<div class="item_text">'+itemData.desc+'</div>'+
                '<div class="item_data">'+ 
                    '<span>'+itemData.publishTime  +'</span>'+ 
                    '<div class="item_data_ribbon">'+ 
                        '<span>'+itemData.commentCount+'</span>' + 
                        '<span>'+itemData.praiseCount+'</span>' + 
                    '</div>'+
                '</div>'+
            '</a>';
    var $divTag = '<div class="item_content">'+aTag+'</div>';
    $item.before($divTag);
}

function createLagerItem(itemData) {
    var $item = $('.itemLear');
    var aTag = '<a href="item.html">'+
                '<div class="item_large_img">'+
                    '<img src="'+imgLargeSrc+'">'+
                    '<span>'+'标签'+'</span>'+
                '</div>'+
                '<div class="item_large_text"> <h3> <span>'+descLargeStr+' </h3> </span></div>'+
                '<div class="item_data item_large_data">'+ 
                    '<span>'+ '时间 ' +'</span>'+ 
                    '<div class="item_data_ribbon">'+ 
                        '<span>'+'阅读'+'</span>' + 
                        '<span>'+'收藏'+'</span>' + 
                    '</div>'+
                '</div>'+
            '</a>';
    var $divTag = '<div class="item_content_large">'+aTag+'</div>';
    $item.before($divTag);
}


function createItemJoin() {
    var $item = $('.itemLear');
    var aJoinTag = '<a href="item.html">'+
                        '<img src="'+imgJoinLeftSrc+'"  class="item_join_left">'+
                        '<div class="item_join_right">'+ 
                            '<span> JOIN </span>'+
                            '<span> NEW </span>'+
                        '</div>'+
                        '<div class="item_join_img"><img src="'+imgJoinSrc+'"></div>'+
                        '<div class="item_join_bottom">'+
                            '<h3>'+joinH3Str+'</h3>'+ 
                            '<p>'+ JoinTextStr+'</p>'+
                        '</div>'+
                    '</a>'+
                    '<a href="item.html" class="item_join_after">'+
                        '<div class="item_join_after_img">'+
                            '<img src="'+imgAfterSrc+'">'+
                      '</div>'+
                    '</a>';
    var $divTag = '<div class="item_join">'+aJoinTag+'</div>';
    $item.before($divTag);
}

function addRollData(rollData) {
    var $ulImg = $('.imgRoll_list');
    var $imgList = '<li><img src="'+ rollData.imgUrl +'" alt="（暂时没有）图二描述">'+
                        ' <div class="imgRoll_text"><span>'+rollData.category+'</span>'+
                                            '<h3>'+
                                                '<span>'+rollData.desc+'</span>'+
                                            '</h3>'+
                            '</div>'+
                    '</li>';
    $ulImg.append($imgList);
}


function headerChange() {
    // 小图标悬浮换色
    $( ".forumNav a").first().hover(function() {
        $(".logo_curiosity").attr('src', 'images/head_logo_curiosity_hover.png');   
    }, function() {
        $(".logo_curiosity").attr('src', 'images/head_logo_curiosity.png');
    });
    $( ".forumNav a").last().hover(function() {
        $(".logo_menu").attr('src', 'images/head_logo_memu_hover.png'); 
    }, function() {
        $(".logo_menu").attr('src', 'images/head_logo_menu.png');
    });
    $( ".section_right .img_weibo").hover(function() {
        $(".img_weibo").attr('src', 'images/head_right_weibo_hover.png');   
    }, function() {
        $(".img_weibo").attr('src', 'images/head_right_weibo.png');
    });
    $( ".section_right .img_weixin").hover(function() {
        $(".img_weixin").attr('src', 'images/head_right_weixin_hover.png'); 
    }, function() {
        $(".img_weixin").attr('src', 'images/head_right_weixin.png');
    });
    //
    $( ".section_right .img_weixin").hover(function() {
        $(".QR_code").show();   
    }, function() {
        $(".QR_code").hide();
    });
    $( ".QR_code").hover(function() {
        $(".QR_code").show();   
    }, function() {
        $(".QR_code").hide('slow');
    });
    // 全部分类隐藏显示切换
    $(".allNav_input").click(function() {
        $(".allNav_list").toggle();
    });



    // 切换高度
    var fs = true;
    $(window).scroll(function() {
        var scrollTop=$(window).scrollTop();
        $(".allNav_list").css('display', 'none');
        if (scrollTop>0) {
            if (fs) {
                $("#header").stop(true).animate({
                    height: 60},
                    500);
                $(".logo").stop(true).animate({
                    height: 60,
                    width: 120},
                    10);
                $(".logo a img").first().addClass('logo_img_small').removeClass('logo_img');
                $(".logo a img").last().addClass('logo_txt_small').removeClass('logo_txt');
                fs = false;
            }
        }else{
            $("#header").stop(true).animate({
                height: 80},
                500);
            $(".logo").stop(true).animate({
                height: 120,
                width: 90},
                0);
            $(".logo a img").first().addClass('logo_img').removeClass('logo_img_small');
            $(".logo a img").last().addClass('logo_txt').removeClass('logo_txt_small');
            fs = true; 
        }
    });
}


//轮播图相关运动
function roll() {                               
    var liIndex = 0;
    var clone = $(".imgRoll .imgRoll_list li").first().clone();//克隆第一张图片
    $(".imgRoll .imgRoll_list").append(clone);//复制到列表最后
    var size = 6;  //多少个li
    //指示原点光标
    for (var j = 0; j < size-1; j++) {
        $(".imgRoll .num").append("<li></li>");
    }

    $(".imgRoll .num li").first().addClass("on");

    /*自动轮播*/

    var t = setInterval(function () { liIndex++; move();},2000);

    /*鼠标悬停事件*/

    $(".imgRoll").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () { liIndex++; move(); }, 2000); //鼠标移出时清除定时器
    });


    /*鼠标滑入原点光标事件*/

    $(".imgRoll .num li").hover(function () {

        var index = $(this).index();//获取当前索引值
        liIndex = index;
        $(".imgRoll .imgRoll_list").stop().animate({ left: -index * 755 }, 500);
        $(this).addClass("on").siblings().removeClass("on");
    });



    /*向左按钮*/
    $(".imgRoll .btn_l").click(function () {
        prevItem();
    });

    
    /*向右按钮*/
    $(".imgRoll .btn_r").click(function () {
        nextItem();
    });
    function prevItem() {
        liIndex--;
        move();
    }
    function nextItem() {
        liIndex++;
        move();
    }

    /*移动事件*/
    function move() {
        if (liIndex == size) {  
            $(".imgRoll .imgRoll_list").css({ left: 0 });
            liIndex = 1;
        }
        if (liIndex == -1) {
             $(".imgRoll .imgRoll_list").css({ left : -(size - 1) * 755 });
            liIndex = size - 2;
        }
        $(".imgRoll .imgRoll_list").stop().animate({ left: -liIndex * 755 }, 500);

        if (liIndex == size - 1) {
            $(".imgRoll .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".imgRoll .num li").eq(liIndex).addClass("on").siblings().removeClass("on");
        }
    }

    //鼠标摁下移动操作
    var moveX = 0;
    var downX = 0;
    $('.imgRoll_list').mousedown(function(e){
        var leftX = parseInt($(".imgRoll_list").css("left"));
        downX = e.pageX;

        // downX = e.offsetX;
        moveX = downX;
        $('.imgRoll_list').bind('mousemove', function(e) {
            // moveX = e.offsetX;
            moveX = e.pageX;
            var endX = moveX-downX+leftX;
            // alert(endX);
            $(".imgRoll_list").css("left",endX);   
        });
    return false;
    });
    $('.imgRoll_list').mouseup(function() {
        var distanceX = moveX-downX;
        if(distanceX>=-100&&distanceX<=-20){
            move();
        }
        if (distanceX>20&&distanceX<=100) {
            move();
        }
        if (distanceX>100) {
            prevItem(); 
        }
        if (distanceX<-100) {
            nextItem(); 
        }
        $('.imgRoll_list').unbind('mousemove');
    });
    $('.imgRoll_list').mouseover(function() {
        move();
        $('.imgRoll_list').unbind('mousemove');
    });
}