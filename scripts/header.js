// 小图标悬浮换色
$(function(){
	$( ".forumNav a").last().hover(function() {
		$(".logo_curiosity").attr('src', 'images/head_logo_curiosity_hover.png');	
	}, function() {
		$(".logo_curiosity").attr('src', 'images/head_logo_curiosity.png');
	});
	$( ".forumNav a").first().hover(function() {
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
	$( ".section_right .img_weixin").hover(function() {
		$(".QR_code").show();	
	}, function() {
		$(".QR_code").hide('slow');
	});
	$( ".QR_code").hover(function() {
		$(".QR_code").stop(true);	
	}, function() {
		$(".QR_code").hide('slow');
	});



	// $( ".forumNav a").fisrt().hover(function() {
	// 	$(".logo_menu").attr('src', 'images/head_logo_memu_hover.png');	
	// }, function() {
	// 	$(".logo_menu").attr('src', 'images/head_logo_menu.png');
	// });
	// $( ".img_weibo").hover(function() {
	// 	$(".img_weibo").attr('src', 'images/head_right_weibo_hover.png');	
	// }, function() {
	// 	$(".img_weibo").attr('src', 'images/head_right_weibo.png');
	// });
	// $( ".img_weibo").hide();
	//  $( ".forumNav a").last().hover(function() {
	// 	$(".logo_menu").hide();
		// $(".logo_curiosity").attr('src', 'images/head_logo_curiosity_hover.png');
	// });
});
// 全部分类隐藏显示切换
$(function(){
	$(".allNav_input").click(function() {
		$(".allNav_list").toggle();
	});
});
// 切换高度
$(function () {
	$(window).scroll(function() {
		var scrollTop=$("body").scrollTop();
		if (scrollTop==0) {
			$("#header").animate({
				height: 80},
				200);
		}else{
			$("#header").height(60);
		}
	});
});