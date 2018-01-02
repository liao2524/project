function ItemData(){

}
ItemData.prototype = {

	imgSrc:"",
	desc:"",
	publishTime:0,
	commentCount:0,
	praiseCount:0,
	type:100 //100 200 300
};



var descArrays = [
"两大浏览器将停止自动播放视频，这对广告行业有什么影响？",
"这套可移动的模块化单元房，可作图书馆也可作住宅",
"日本小镇特产走出大山，靠的是一座废料搭起来的酿酒厂",
"沃尔玛引入扫描货架机器人，速度比人类快三倍",
"美图投资的 Faceu 完成新一轮融资，也说要做社交",
"「这世界」130 年了，千克的定义要变了"
];

var loadmoreDescArrays = [
"loadmore两大浏览器将停止自动播放视频，这对广告行业有什么影响？",
"loadmore这套可移动的模块化单元房，可作图书馆也可作住宅",
"loadmore日本小镇特产走出大山，靠的是一座废料搭起来的酿酒厂",
"loadmore沃尔玛引入扫描货架机器人，速度比人类快三倍",
"loadmore美图投资的 Faceu 完成新一轮融资，也说要做社交",
"loadmore「这世界」130 年了，千克的定义要变了"
];

var imgArrays = [
"http://img.qdaily.com/article/article_show/20171031094030LZbuDQdlaX4SFohi.png?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",
"http://img.qdaily.com/article/article_show/201710311110263FMjdvzcn7QraOu2.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",	
"http://img.qdaily.com/article/article_show/20171031114624dis7rOEJR62YjgDw.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",	
"http://img.qdaily.com/article/article_show/20171031115703gIHeuaTCJ5kBFqoh.png?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",	
"http://img.qdaily.com/article/article_show/201710301359295QmfD8yiJvbNl6Ea.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1",	
"http://img.qdaily.com/article/article_show/20171030225326muNfc0HEQsnJeDb6.jpg?imageMogr2/auto-orient/thumbnail/!245x185r/gravity/Center/crop/245x185/quality/85/format/webp/ignore-error/1"];



var lineCount = 0;


function createTagItem(itemData, type, lineCount){
	var commentStr = '<span>'+itemData.commentCount+'</span>';
	var praiseStr = '<span>'+itemData.praiseCount+'</span>';
	var divCommentPraise = '<div class="item_normal_praise">' + commentStr +　praiseStr+'</div>';
	// 由最里层开始添加
	var timeStr = '<span>刚刚</span>';
	var divTimeCommentPraise = '';
	
	if(200 === type){
		divTimeCommentPraise = '<div class="item_time_comment_praise item_large_time_comment_praise">'+ timeStr + divCommentPraise+'</div>';
	} else{
		divTimeCommentPraise = '<div class="item_time_comment_praise">'+ timeStr + divCommentPraise+'</div>';
	}

	var descStr = '<span>'+itemData.desc+'</span>';
	var divTxt = '<div class="item_normal_txt">'+descStr+'</div>';
	var img = '<img src="'+itemData.imgSrc+'">';
	var categoryStr = '<span>商业</span>';
	var divCategory = '<div class="item_normal_category">'+categoryStr+'</div>';
	var aTag = '<a href="">'+divCategory+img+divTxt+divTimeCommentPraise+'</a>';


	//判断type，是200的话就加上item_large的class,同时如果是第四个则取消外边距Class  
	if(200 === type){

		if(4 === lineCount){
			return '<div class="tem_normal item_large">'+aTag+'</div>';					
		}
		return '<div class="item_normal item_large item_margin_right">'+aTag+'</div>';
	} else{

		if(4 === lineCount) {
			return '<div class="item_normal">'+aTag+'</div>';
		}
		return '<div class="item_normal item_margin_right">'+aTag+'</div>';
	}
	

}


// function addLiTag(arrs) {
// 	var $ulTag = $('.ul_item_container');  	  
// 	var tempBidDataArrs = new Array();

// 	for(var i=0; i<arrs.length; i++){
// 		var itemData = arrs[i];
// 		var container = "";
// 		var $liTag = $('<li></li>');  
// 		if(100 === itemData.type){
// 				lineCount ++;
// 				container = createTagItem(itemData, 100, lineCount);
// 				$liTag.html(container);
// 				$ulTag.append($liTag);
// 			} else if(200 === itemData.type){
// 				lineCount = lineCount + 2;
			
// 				if(lineCount > 4){ //移到下一行
// 					tempBidDataArrs.push(itemData);
// 					lineCount = lineCount - 2;
// 					continue;
// 				}
// 				container = createTagItem(itemData, 200, lineCount);
// 				$liTag.html(container);
// 				$ulTag.append($liTag);
// 			}
// 		}
// 		if(4 === lineCount){
// 			lineCount = 0;
// 		}

// }

function createData(descArrays, imgArrays, arrsSize) {

	var arrs = new Array();
	for(var i=0; i<arrsSize; i++){

		var itemData = new ItemData();
		itemData.imgSrc = imgArrays[rnd(0,6)];
		itemData.desc = descArrays[rnd(0,6)];
		itemData.publishTime = 1509441932132;   //不懂！！
		itemData.commentCount = 10;
		itemData.praiseCount = 15;	

		if(i === 5) {
			itemData.type = 300;
		}
		if(i === 6) {
			itemData.type = 400;
		}

		if(7 === i){
			itemData.type = 200;
		}

		if(15 === i) {
			itemData.type = 200;
		}

		arrs.push(itemData);
	}

	return arrs;
}


function loadItemData(){

		var arrs = createData(descArrays, imgArrays, 21);

		var $itemContainer = $('.item-container');
		var $ulTag = $('<ul class=ul-item-container></ul>');
		$itemContainer.append($ulTag);

		var tempBidDataArrs = new Array();

		for(var i=0; i<arrs.length; i++){
			var itemData = arrs[i];

			var container = "";
			var $liTag = $('<li></li>');   //这时候ul里不是没有li吗  这样可以作为选择器吗？   这样做是相当于添加了一对li？
			if(100 === itemData.type){
					lineCount ++;
					container = createTagItem(itemData, 100, lineCount);
					$liTag.html(container);
					$ulTag.append($liTag);
				} else if(200 === itemData.type){
					lineCount = lineCount + 2;
				
					if(lineCount > 4){ //移到下一行
						tempBidDataArrs.push(itemData);
						lineCount = lineCount - 2;
						continue;
					}

					container = createTagItem(itemData, 200, lineCount);	
					$liTag.html(container);
					$ulTag.append($liTag);
				}
			if(4 === lineCount){
				lineCount = 0;
			}
		}

}