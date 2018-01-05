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
var imgJoinSrc = "images/item/itemFocus_left.png";
var imgJoinRightSrc = "";
var imgJoinLeftSrc = "images/item/focus.jpeg";
function createTagItem(type){
	if (300 === type) {
		var imgAfter = '<img src="'+imgAfterSrc+'">';
		var divAfterImg = '<div class="item_join_after_img">'+imgAfter+'</div>';
		var aAfterTag = '<a href="item.html" class="item_join_after">'+divAfterImg+'</a>';

		var JoinTextStr = '这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述';
		var pTag = '<p>'+ JoinTextStr+'</p>';
		var h3Tag = "【标题标题标题标】";
		var divBottom  = '<div class="item_date">'+ h3Tag + pTag+'</div>';

		var imgJoin = '<img src="'+imgJoinSrc+'"  class="item_join_img">';

		var	imgJoinRight = '<img src="'+imgJoinRightSrc+'"  class="item_join_img">';
		var joinRight = '<div class="item_date">'+ imgJoinRight+'</div>';

		var	imgJoinLeft = '<img src="'+imgJoinLeftSrc+'"  class="item_join_img">';

		var aJoinTag = '<a href="item.html">'+imgJoinLeft+joinRight+imgJoin+divBottom+aAfterTag+'</a>';
		return '<div class="item_join">'+aJoinTag+'</div>';
	}else{
		// 由最里层开始添加
		var commentStr = '<span>'+commentCount+'</span>';
		var praiseStr = '<span>'+praiseCount+'</span>';	
		var divTimeCommentPraise = '<div>'+ commentStr + praiseStr + '</div>';
		var timeStr = '<span>刚刚</span>';
		var itemDate = '';
		
		if(100 === type){
			itemDate = '<div class="item_date">'+ timeStr + divTimeCommentPraise+'</div>';
		}
		if(200 === type){
			itemDate = '<div class="item_date item_large_date">'+ timeStr + divTimeCommentPraise+'</div>';
		}

		var descStr = '这是一段文字描述';
		var descLargeStr = '这是一段大图的文字描述';
		var divTxt = '<div class="item_text">'+descStr+'</div>';

		var divLargeTxt = '<div class="item_large_text">'+descLargeStr+'</div>';

		var img = '<img src="'+imgSrc+'">';
		var categoryStr = '<span>商业</span>';
		var divCategory = '<div class="item_img">'+categoryStr+img+'</div>';

		var aTag = '';
		if(100 === type){
			aTag = '<a href="item.html">'+divCategory+divTxt+itemDate+'</a>';
			return '<div class="item_content">'+aTag+'</div>';
		} 
		if(200 === type){
			aTag = '<a href="item.html">'+divCategory+divLargeTxt+itemDate+'</a>';
			return '<div class="item_content">'+aTag+'</div>';
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
	divCount(1,0);
});
var scrollCount=0;


function divCount(TagCount,scrollCount) {
	if (scrollCount<2) {
		for (var i = 0; i < TagCount; i++) {
			var $itemContent = createTagItem(300);
			var $item = $('.itemLear');
			$item.before($itemContent);	
			// createTagItem(100);
		}	
	}else{
		$('.showmore').show();
	}
}
$(function () {
	$('.showmore_btn').click(function() {
		divCount(10,0);
		scrollCount=0;
	});
});
$(function () {
	$(window).scroll(function() {
		var scrollTop=$(window).scrollTop();
		var contentHeigth = $('#content').height()-483;
		
		if (scrollTop>=contentHeigth) {
			setTimeout(divCount(10,scrollCount),3000);
			
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