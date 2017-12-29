function createTagItem(itemData, type, lineCount){
	var commentStr = '<span>'+itemData.commentCount+'</span>';
	var praiseStr = '<span>'+itemData.praiseCount+'</span>';
	var divCommentPraise = '<div class="item-normal-praise">' + commentStr +　praiseStr+'</div>';



	var timeStr = '<span>刚刚</span>';
	var divTimeCommentPraise = '';
	if(200 === type){
		divTimeCommentPraise = '<div class="item-time-comment-praise item-large-time-comment-praise">'+ timeStr + divCommentPraise+'</div>';
	} else{
		divTimeCommentPraise = '<div class="item-time-comment-praise">'+ timeStr + divCommentPraise+'</div>';
	}

	var descStr = '<span>'+itemData.desc+'</span>';
	var divTxt = '<div class="item-normal-txt">'+descStr+'</div>';
	var img = '<img src="'+itemData.imgSrc+'">';
	var categoryStr = '<span>商业</span>';
	var divCategory = '<div class="item-normal-category">'+categoryStr+'</div>';
	var aTag = '<a href="">'+divCategory+img+divTxt+divTimeCommentPraise+'</a>';



	if(200 === type){

		if(4 === lineCount){
			return '<div class="tem-normal item-large">'+aTag+'</div>';					
		}
		return '<div class="item-normal item-large item-margin-right">'+aTag+'</div>';
	} else{

		if(4 === lineCount) {
			return '<div class="item-normal">'+aTag+'</div>';
		}
		return '<div class="item-normal item-margin-right">'+aTag+'</div>';
	}
	

}