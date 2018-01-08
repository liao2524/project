function addTag(tagClass,tag,tagContent) {
　　　　//添加 div
　　var div = document.createElement("div");
　　　　//设置 div 属性，class
　　div.setAttribute("tagClass", "tag");

　　div.innerHTML = tagContent;
// 　　parent.appendChild(div);
}


// function ItemData(){

// }
// ItemData.prototype = {

// 	imgSrc:"",
// 	desc:"",
// 	publishTime:0,
// 	commentCount:0,
// 	praiseCount:0,
// 	type:100 
// };





var commentCount = 100;
var praiseCount = 100;
var imgSrc = "images/item/itemPicture2.jpeg";
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

		/*var	imgJoinRight = '<img src="'+imgJoinRightSrc+'"  class="item_join_right_img">';*/
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
	// createTagItem();
	divCount(16,0);
});

var scrollCount=0;
function divCount(TagCount,scrollCount) {
	// alert(scrollCount);
	/*var $itemContent =createTagItem(100);*/
	var $itemContent ='';
	var $item = $('.itemLear');
	var sign = 0;
	/*var typeVal = Math.random();*/
	if (scrollCount===0) {
		for (var j = 0; j < 5; j++) {
			if (j===4) {
				$itemContent=createTagItem(300);
			}else{
				$itemContent=createTagItem(100);
			}
			$item.before($itemContent);
		}
	scrollCount+=1;
	TagCount-=5;
	}
	/*alert(typeVal);*/
	/*var typeVal=0.5;*/
	if (0<scrollCount<3) {
		for (var i = 0; i < TagCount; i++) {
			var typeVal = Math.random();
			var r = sign%4;
			console.log(r);
			// alert(sign);
			// alert(typeof typeVal);
			// console.log(typeVal);
			if (typeVal<=0.8) {
				$itemContent=createTagItem(100);
				sign += 1;
			}else{
				if (sign==3) {
					$itemContent=createTagItem(100);
					sign += 1;
				}else{
					$itemContent=createTagItem(200);
					sign += 2;
				}
			}
			
			// console.log(sign);
			
			$item.before($itemContent);	
		}	
	}else{
		$('.showmore').show();
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
			/*setTimeout(divCount(10,scrollCount),3000);*/
			scrollCount+=1;	
		}
		$(".allNav_list").css('display', 'none');
	});	
});
/*$('html').click(function() {
var scrollTop=$(window).scrollTop();
	alert(scrollTop);
	var contentHeigth = $('#content').height()-483;
	alert(contentHeigth);		
	});*/