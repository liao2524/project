
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
function addTag(tagClass,tag,tagContent) {
　　　　//添加 div
　　var div = document.createElement("div");
　　　　//设置 div 属性，class
　　div.setAttribute("tagClass", "tag");

　　div.innerHTML = tagContent;
// 　　parent.appendChild(div);
}


var jsonItem=[
{"imgSrc":"images/item/item1.jpg","categoryStrSrc":"商业","timeStrSrc":"时间","descStr":"搜狗终于要上市了","commentCountSrc":120,"praiseCountSrc":100},
{"imgSrc":"images/item/item2.jpg","categoryStrSrc":"城市","timeStrSrc":"时间","descStr":"员工身心健康也是企业竞争力","commentCountSrc":10,"praiseCountSrc":90},
{"imgSrc":"images/item/item3.jpg","categoryStrSrc":"智能","timeStrSrc":"时间","descStr":"“全球时尚行业至少五分之一的消费者都聚集在中国”","commentCountSrc":120,"praiseCountSrc":430},
{"imgSrc":"images/item/item4.jpg","categoryStrSrc":"旅游","timeStrSrc":"时间","descStr":"双中子星并合","commentCountSrc":90,"praiseCountSrc":210},
{"imgSrc":"images/item/item5.jpg","categoryStrSrc":"娱乐","timeStrSrc":"时间","descStr":"9 张图带你看那一代老派互联网科技公司的起落","commentCountSrc":300,"praiseCountSrc":502},
{"imgSrc":"images/item/item6.png","categoryStrSrc":"时尚","timeStrSrc":"时间","descStr":"办公室设计在这一点上怎么配合？","commentCountSrc":303,"praiseCountSrc":72},
{"imgSrc":"images/item/item7.jpg","categoryStrSrc":"体育","timeStrSrc":"时间","descStr":"宇宙最大烟火表演”激动人心","commentCountSrc":109,"praiseCountSrc":100},
{"imgSrc":"images/item/item8.jpg","categoryStrSrc":"商业","timeStrSrc":"时间","descStr":"我们看待宇宙的方式要变了吗？","commentCountSrc":100,"praiseCountSrc":100},
{"imgSrc":"images/item/item9.jpg","categoryStrSrc":"城市","timeStrSrc":"时间","descStr":"搜狗终于要上市了","commentCountSrc":100,"praiseCountSrc":100},
{"imgSrc":"images/item/item10.jpg","categoryStrSrc":"体育","timeStrSrc":"时间","descStr":"你看那一代老派互联网科技公司的起落","commentCountSrc":100,"praiseCountSrc":100},
{"imgSrc":"images/item/item11.jpg","categoryStrSrc":"商业","timeStrSrc":"时间","descStr":"｜我们的办公室④","commentCountSrc":100,"praiseCountSrc":100},
{"imgSrc":"images/item/item12.jpeg","categoryStrSrc":"智能","timeStrSrc":"时间","descStr":"搜狗终于要上市了","commentCountSrc":100,"praiseCountSrc":100},
];


var imgArrays = [
    "http://img.qdaily.com/article/article_show/20171031094030LZbuDQdlaX4SFohi.png?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/201710311110263FMjdvzcn7QraOu2.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20171031114624dis7rOEJR62YjgDw.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20171031115703gIHeuaTCJ5kBFqoh.png?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/201710301359295QmfD8yiJvbNl6Ea.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20171030225326muNfc0HEQsnJeDb6.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20180115020919X4JuGQOHsdjY8qxC.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/201801150219205KwFJlsOvt9z624E.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20180116173913FG9Ur7ht8Lf0EZ6W.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20180115180924VyXm1hP4R92B8itY.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/201801161120099ZYU3zFxjA7mOfCb.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20180112163144MVCiTecmGhq9sgY2.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20180116120841MZo2iDU15uzhwJsr.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
    "http://img.qdaily.com/article/article_show/20180116173827jAm2TdOqtHCI6fro.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1"
];
var descArrays = [
    "两大浏览器将停止自动播放视频，这对广告行业有什么影响？",
    "这套可移动的模块化单元房，可作图书馆也可作住宅",
    "日本小镇特产走出大山，靠的是一座废料搭起来的酿酒厂",
    "沃尔玛引入扫描货架机器人，速度比人类快三倍",
    "美图投资的 Faceu 完成新一轮融资，也说要做社交",
    "「这世界」130 年了，千克的定义要变了",
    "搜狗终于要上市了",
    "员工身心健康也是企业竞争力",
    "9 张图带你看那一代老派互联网科技公司的起落",
    "你看那一代老派互联网科技公司的起落",
    "宇宙最大烟火表演”激动人心",
    "双中子星并合",
];
var commentCount = "";
var praiseCount ="" ;
var imgSrc = "";
var imgAfterSrc = "images/item/itemIdea.gif";
var imgJoinSrc = "images/item/focus.jpeg";
var imgJoinRightSrc = "";
var imgJoinLeftSrc = "images/item/itemFocus_left.png";
var imgLargeSrc="images/item/itemGucci.jpg";
var JoinTextStr = '这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述';
var joinH3Str = "【标题标题标题标】";
var descStr = '这是一段文字描述';
var descLargeStr = '这是一个大标题这是一个大标题这是一个大标题这是一个大标题这是一个大标题';
var timeStrSrc = "时间";
var categoryStrSrc = "商业";



$(function(){
    divCount(16,0);
});



function ItemDate(){

}
ItemDate.prototype ={
    img:"",
    categoryStr:"",
    time:"",
    desc:"",
    commentCount:"",
    praiseCount:""
};
  


var imgSign=0;
var cycles=0; 
var sign = 0;
var scrollCount=0;

function createData(){

            }
            createData.prototype = {
                img:"",
                desc:"",
                categoryStr:"",
                time:"",
                commentCount:"",
                praiseCount:""
            };

var arrsDate = new Array();


for(var i=0; i<12; i++){

    var itemDate = new createData();


    var imgArrs = imgArrays[i];

    var descArrs = descArrays[i];

    var timeArrs = jsonItem[i].timeStrSrc;

    var categoryStrArrs = jsonItem[i].categoryStrSrc;

    var commentCountArrs = jsonItem[i].commentCountSrc;

    var praiseCountArrs = jsonItem[i].praiseCountSrc;


    itemDate.img = imgArrs;
    itemDate.desc = descArrs;

    itemDate.time = timeArrs;
    itemDate.categoryStr = categoryStrArrs;

    itemDate.commentCount = commentCountArrs;
    itemDate.praiseCount = praiseCountArrs;
    arrsDate.push(itemDate);

}
/*console.log(arrsDate.length);*/



function divCount(TagCount,scrollCount) {
    var $itemContent ='';
    var $item = $('.itemLear');
    if (scrollCount===0) {
        for (var j = 0; j < 5; j++) {
            // alterDate(imgSign);
            if (j===4) {
                $itemContent=createTagItem(300);
            }else{
                $itemContent=createTagItem(100);
                /*alert(imgSign);*/
            }
            $item.before($itemContent);
            imgSign++;
        }
    scrollCount+=1;
    TagCount-=5;
    }
    else {
        for (var i = 0; i < TagCount; i++) {
            var typeVal = Math.random();
            if (typeVal<=0.8) {
                // alterDate(imgSign);
                $itemContent=createTagItem(100);
                $item.before($itemContent);
                imgSign++;
                sign += 1;
            }else{
                if (sign==3) {
                    // alterDate(imgSign);
                    $itemContent=createTagItem(100);
                    $item.before($itemContent);
   
                    imgSign++;
                    // alert(imgSign);
                    sign += 1;
                }else{
                    $itemContent=createTagItem(200);
                    $item.before($itemContent);
                    sign += 2;
                }
            }
            if (sign===4) {
                sign=0;
            }
            if (imgSign==12) {
                imgSign=0;
            }   
        }   
    }
}
function createTagItem(type){

    if (300 === type) { 
        var imgAfter = '<img src="'+imgAfterSrc+'">';
        var divAfterImg = '<div class="item_join_after_img">'+imgAfter+'</div>';
        var aAfterTag = '<a href="item.html" class="item_join_after">'+divAfterImg+'</a>';

        var h3Tag = '<h3>'+joinH3Str+'</h3>';
        var pTag = '<p>'+ JoinTextStr+'</p>';
        var divBottom  = '<div class="item_join_bottom">'+ h3Tag + pTag+'</div>';

        var imgJoin = '<img src="'+imgJoinSrc+'"  class="item_join_img">';

        // var timeStr = '<span>'+timeStrSrc+'</span>';
        /*var   imgJoinRight = '<img src="'+imgJoinRightSrc+'"  class="item_join_right_img">';*/
        var imgJoinRight ='';
        var joinRight = '<div class="item_join_right">'+ imgJoinRight+'</div>';

        var imgJoinLeft = '<img src="'+imgJoinLeftSrc+'"  class="item_join_left">';

        var aJoinTag = '<a href="item.html">'+imgJoinLeft+joinRight+imgJoin+divBottom+'</a>'+aAfterTag;
        return '<div class="item_join">'+aJoinTag+'</div>';
    }else{
        // 由最里层开始添加
        var timeStr = '<span>'+arrsDate[imgSign].time +'</span>';
        var commentStr = '<span>'+arrsDate[imgSign].commentCount+'</span>';
        var praiseStr = '<span>'+arrsDate[imgSign].praiseCount+'</span>'; 
        var divTimeCommentPraise = '<div class="item_date_ribbon">'+ commentStr + praiseStr + '</div>';
        var itemTimeDate = '';
        
        if(100 === type){
            itemTimeDate = '<div class="item_date">'+ timeStr + divTimeCommentPraise+'</div>';
        }
        if(200 === type){
            itemTimeDate = '<div class="item_date item_large_date">'+ timeStr + divTimeCommentPraise+'</div>';
        }

        var divTxt = '<div class="item_text">'+arrsDate[imgSign].desc+'</div>';

        var divLargeTxt = '<div class="item_large_text"> <h3> <span>'+descLargeStr+' </h3> </span></div>';

        var img = '<img src="'+arrsDate[imgSign].img+'">';
        var imgLarge='<img src="'+imgLargeSrc+'">';
        var categoryStr = '<span>'+arrsDate[imgSign].categoryStr+'</span>';
        var divItemImg = '';

        var aTag = '';
        if(100 === type){
            divItemImg = '<div class="item_img">'+img+categoryStr+'</div>';
            aTag = '<a href="item.html">'+divItemImg+divTxt+itemTimeDate+'</a>';
            return '<div class="item_content">'+aTag+'</div>';
        } 
        if(200 === type){
            divItemImg = '<div class="item_large_img">'+imgLarge+categoryStr+'</div>';
            aTag = '<a href="item.html">'+divItemImg+divLargeTxt+itemTimeDate+'</a>';
            return '<div class="item_content_large">'+aTag+'</div>';
        } 
    }

}

                    
$(function () {
    $('.showmore_btn').click(function() {
        divCount(16,1);
        scrollCount=1;
    });
});

$(function () {
    $(window).scroll(function() {
        var scrollTop=$(window).scrollTop();
        var contentHeigth = $('#content').height()-483;
        if (scrollTop>=contentHeigth&&scrollCount<4) {
            divCount(10,1);
            scrollCount+=1; 
        }
        $(".allNav_list").css('display', 'none');
        // alert(scrollCount);
    }); 
});


