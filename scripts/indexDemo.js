
$(document).ready(function () {
    var i = 0;
    var clone = $(".imgRoll .imgRoll_list li").first().clone();//克隆第一张图片
    $(".imgRoll .imgRoll_list").append(clone);//复制到列表最后
    var size = $(".imgRoll .imgRoll_list li").size();

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


    function addTag(tagClass,tag,tagContent) {
    　　　　//添加 div
    　　var div = document.createElement("div");
    　　　　//设置 div 属性，class
    　　div.setAttribute("tagClass", "tag");

    　　div.innerHTML = tagContent;
    // 　　parent.appendChild(div);
    }

    $(function(){
        divCount(16,0);
    });

    var imgSign=0;
    var cycles=0; 
    var sign = 0;
    var scrollCount=0;

    function divCount(TagCount,scrollCount) {
        var $itemContent ='';
        var $item = $('.itemLear');
        $.get('http://localhost:8081/itemList', function(data) {
            var serverData = JSON.parse(data);//获取数据
            if (scrollCount===0) {
                for (var j = 0; j < 5; j++) {
                    if (j===4) {
                        $itemContent=createTagItem(300,serverData);
                    }else{
                        $itemContent=createTagItem(100,serverData);
                    }
                    $item.before($itemContent);
                    imgSign++;
                }
            TagCount-=5;
            }
            for (var i = 0; i < TagCount; i++) {
                var typeVal = Math.random();
                if (typeVal<=0.8) {
                    $itemContent=createTagItem(100,serverData);
                    $item.before($itemContent);
                    imgSign++;
                    sign += 1;
                }else{
                    if (sign==3) {
                        $itemContent=createTagItem(100,serverData);
                        $item.before($itemContent);
                        imgSign++;
                        sign += 1;
                    }else{
                        $itemContent=createTagItem(200,serverData);
                        $item.before($itemContent);
                        sign += 2;
                    }
                }
                if (sign===4) {
                    sign=0;
                }
                if (imgSign==10) {
                    imgSign=0;
                }      
            }
            scrollCount+=1;
            //item数添加到div里面
            function createTagItem(type,serverData){
                var itemData = serverData[imgSign];
                var aTag = '';

                if (300 === type) {
                   return createItemJoin(itemData);
                }
                if(100 === type){
                    return createNormalItem(itemData); 
                } 
                if(200 === type){
                    return createLagerItem(itemData);
                }
            }
        });
    }
   
              
    $(function () {
        $('.showmore_btn').click(function() {
            $('.loader_bd').hide();
            $('.loading').show();
            setTimeout('loadingTime(16)',3000);   
            scrollCount=1;
        });
    });


    var counts="";
    function loadingTime(counts)
    {   
        divCount(counts,1);
        $('.loading').hide();
    }

    window.onscroll = function () {
    var tur = true;
    var scrollTop=$(window).scrollTop();
    var contentHeigth = $('#content').height();
        if (true) {
            if (scrollCount>=4) {
                $('.loading').hide();
                $('.loader_bd').show();  
            }else if(scrollTop>contentHeigth&&scrollCount<4){
                setTimeout("divCount(5,1)",1000);
                scrollCount+=1; 
            }
            $(".allNav_list").css('display', 'none');
            tur = false; 
        } 
    };
});


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
function createItemJoin(itemData) {
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
    return '<div class="item_join">'+aJoinTag+'</div>';
}
function createNormalItem(itemData) {
    aTag = '<a href="item.html">'+
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
    return '<div class="item_content">'+aTag+'</div>';
}
function createLagerItem(itemData) {
    aTag = '<a href="item.html">'+
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
    return '<div class="item_content_large">'+aTag+'</div>';
}