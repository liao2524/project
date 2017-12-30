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


function addLiTag(arrs) {
	var $ulTag = $('.ul_item_container');  	  
	var tempBidDataArrs = new Array();

	for(var i=0; i<arrs.length; i++){
		var itemData = arrs[i];
		var container = "";
		if(200 != itemData.type && lineCount <= 2 && tempBidDataArrs.length > 0){

			var bigItemData = tempBidDataArrs.shift();
			lineCount = lineCount + 2
			container = createTagItem(itemData, 200, lineCount);

			var $liTag = $('<li></li>');
			$liTag.html(container);
			$ulTag.append($liTag);
			lineCount ++;
			container = createTagItem(itemData, 100, lineCount);

			var $liTag = $('<li></li>');
			$liTag.html(container);
			$ulTag.append($liTag);
		} else {
			if(100 === itemData.type){
				lineCount ++;
				container = createTagItem(itemData, 100, lineCount);

				var $liTag = $('<li></li>');
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
				var $liTag = $('<li></li>');
				$liTag.html(container);
				$ulTag.append($liTag);
			}
		}
		if(4 === lineCount){
			lineCount = 0;
		} 

	}

}