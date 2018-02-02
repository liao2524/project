// 两个按钮显示
$(function(){
	$(".imgRoll").hover(function() {
		$(".imgRoll_pre").fadeToggle('4000');
		$(".imgRoll_next").fadeToggle('4000');
	});
});
// 图片滚动
$(function () {
	var $imgRoll=$(".imgRoll_list");
	var adTimer=null;
	var imgLfet=$imgRoll.position().left;
	setInterval(roll,2000);
	function roll() {
		if (imgLfet>-3755) {
			// imgLfet=imgLfet-755;
    			$imgRoll.animate({
				left: imgLfet},
				1000, function() {	
						imgLfet=imgLfet-755;
					  });
		}
		else{
			imgLfet=0;	
		}
	}
	$(".imgRoll").hover(function() {
		if (adTimer) {
			clearInterval(adTimer);
			// alert(A);
		}
	}, function() {
		var adTimer=setInterval(roll,2000);
	});

});
function addTag(tagClass,tag,tagContent) {
　　　　//添加 div
　　var div = document.createElement("div");
　　　　//设置 div 属性，class
　　div.setAttribute("tagClass", "tag");

　　div.innerHTML = tagContent;
// 　　parent.appendChild(div);
}


var imgArrays = [
"images/item/item1.jpg",
"images/item/item2.jpg",
"images/item/item3.jpg",
"images/item/item4.jpg",
"images/item/item5.jpg",
"images/item/item6.png",
"images/item/item7.jpg",
"images/item/item8.jpg",
"images/item/item9.jpg",
"images/item/item10.jpg",
"images/item/item11.jpg",
"images/item/item12.jpeg",
];




var commentCount = 100;
var praiseCount = 100;
var imgSrc = "";
var imgAfterSrc = "images/item/itemIdea.gif";
var imgJoinSrc = "images/item/focus.jpeg";
var imgJoinRightSrc = "";
var imgJoinLeftSrc = "images/item/itemFocus_left.png";
var imgLargeSrc="images/item/itemGucci.jpg";
function createTagItem(type){
	if (300 === type) {
		var imgAfter = '<img src="'+imgAfterSrc+'">';
		var divAfterImg = '<div class="item_join_after_img">'+imgAfter+'</div>';
		var aAfterTag = '<a href="item.html" class="item_join_after">'+divAfterImg+'</a>';

		var JoinTextStr = '这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述';
		var joinH3Str = "【标题标题标题标】";
		var h3Tag = '<h3>'+joinH3Str+'</h3>';
		var pTag = '<p>'+ JoinTextStr+'</p>';
		var divBottom  = '<div class="item_join_bottom">'+ h3Tag + pTag+'</div>';

		var imgJoin = '<img src="'+imgJoinSrc+'"  class="item_join_img">';

		var	imgJoinRight ='';
		var joinRight = '<div class="item_join_right">'+ imgJoinRight+'</div>';

		var	imgJoinLeft = '<img src="'+imgJoinLeftSrc+'"  class="item_join_left">';

		var aJoinTag = '<a href="item.html">'+imgJoinLeft+joinRight+imgJoin+divBottom+'</a>'+aAfterTag;
		return '<div class="item_join">'+aJoinTag+'</div>';
	}else{
		// 由最里层开始添加
		var commentStr = '<span>'+commentCount+'</span>';
		var praiseStr = '<span>'+praiseCount+'</span>';	
		var divTimeCommentPraise = '<div class="item_date_ribbon">'+ commentStr + praiseStr + '</div>';
		var timeStr = '<span>刚刚</span>';
		var itemDate = '';
		
		if(100 === type){
			itemDate = '<div class="item_date">'+ timeStr + divTimeCommentPraise+'</div>';
		}
		if(200 === type){
			itemDate = '<div class="item_date item_large_date">'+ timeStr + divTimeCommentPraise+'</div>';
		}

		var descStr = '这是一段文字描述';
		var descLargeStr = '这是一个大标题这是一个大标题这是一个大标题这是一个大标题这是一个大标题';
		var divTxt = '<div class="item_text">'+descStr+'</div>';

		var divLargeTxt = '<div class="item_large_text"> <h3> <span>'+descLargeStr+' </h3> </span></div>';

		var img = '<img src="'+imgSrc+'">';
		var imgLarge='<img src="'+imgLargeSrc+'">';
		var categoryStr = '<span>商业</span>';
		var divItemImg = '';

		var aTag = '';
		if(100 === type){
			divItemImg = '<div class="item_img">'+img+categoryStr+'</div>';
			aTag = '<a href="item.html">'+divItemImg+divTxt+itemDate+'</a>';
			return '<div class="item_content">'+aTag+'</div>';
		} 
		if(200 === type){
			divItemImg = '<div class="item_large_img">'+imgLarge+categoryStr+'</div>';
			aTag = '<a href="item.html">'+divItemImg+divLargeTxt+itemDate+'</a>';
			return '<div class="item_content_large">'+aTag+'</div>';
		} 
	}

}
/*$(function () {
	$('html').click(function() {
var $itemContent = createTagItem(100);
// alert($itemContent);
var $item = $('.item');
$item.append($itemContent);			
	});
});
*/
$(function(){
	divCount(16,0);
	// alterImg(imgSign);
});
var imgSign=0;
var cycles=0;
var sign = 0;
var scrollCount=0;
function divCount(TagCount,scrollCount) {
	var $itemContent ='';
	var $item = $('.itemLear');
	if (scrollCount===0) {
		for (var j = 0; j < 5; j++) {
			if (j===4) {
				$itemContent=createTagItem(300);
			}else{
				$itemContent=createTagItem(100);
			}
			$item.before($itemContent);
			alterImg(imgSign);
			imgSign++;
		}
	scrollCount+=1;
	TagCount-=5;
	}
	else {
		for (var i = 0; i < TagCount; i++) {
			var typeVal = Math.random();
			if (typeVal<=0.8) {
				$itemContent=createTagItem(100);
				$item.before($itemContent);
				alterImg(imgSign);
				imgSign++;
				sign += 1;
			}else{
				if (sign==3) {
					$itemContent=createTagItem(100);
					$item.before($itemContent);
					alterImg(imgSign);
					imgSign++;
					alert(imgSign);
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
			if (imgSign==14) {
				imgSign=0;
			}	
		}	
	}
}

$(function () {
	$('.showmore_btn').click(function() {
		divCount(10,0);
		scrollCount=1;
	});
});

$(function () {
	$(window).scroll(function() {
		var scrollTop=$(window).scrollTop();
		var contentHeigth = $('#content').height()-483;
		
		if (scrollTop>=contentHeigth) {
			divCount(10,1);
			scrollCount+=1;	
		}
		$(".allNav_list").css('display', 'none');
	});	
});
//添加不同的图片
function alterImg(imgSign) {
	$('.item_img').eq(imgSign).find('img').attr('src', imgArrays[cycles]);
	cycles++;
	// if (cycles==13) {
	// 	cycles=0;
	// }
	// alert(imgSign);
	// imgSign++;
	
}
/*$('html').click(function() {
var scrollTop=$(window).scrollTop();
	alert(scrollTop);
	var contentHeigth = $('#content').height()-483;
	alert(contentHeigth);		
	});*/