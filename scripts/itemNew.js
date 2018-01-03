function addTag(tagClass,tag,tagContent) {
　　　　//添加 div
　　var div = document.createElement("div");
　　　　//设置 div 属性，class
　　div.setAttribute("tagClass", "tag");

　　div.innerHTML = tagContent;
// 　　parent.appendChild(div);
}







var commentCount = 100;
var praiseCount = 100;
var imgSrc = "images/item/itemPicture2.jpeg";
function createTagItem(type){
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
	divCount(16);
});

function divCount(count) {
	for (var i = 0; i < count; i++) {
		var $itemContent = createTagItem(100);
		var $item = $('.item');
		$item.append($itemContent);	
		createTagItem();
	}
}
$(function () {
	$(window).scroll(function() {
		var scrollTop=$(window).scrollTop();
		if (scrollTop) {
			
		}
	});
});