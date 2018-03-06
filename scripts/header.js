// 小图标悬浮换色
$(function(){
	$( ".forumNav a").first().hover(function() {
		$(".logo_curiosity").attr('src', 'images/head_logo_curiosity_hover.png');	
	}, function() {
		$(".logo_curiosity").attr('src', 'images/head_logo_curiosity.png');
	});
	$( ".forumNav a").last().hover(function() {
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
		$(".QR_code").hide();
	});
	$( ".QR_code").hover(function() {
		$(".QR_code").show();	
	}, function() {
		$(".QR_code").hide('slow');
	});


});
// 全部分类隐藏显示切换
$(function(){
	$(".allNav_input").click(function() {
		$(".allNav_list").toggle();
		var H=document.documentElement.clientHeight;
		var W=document.documentElement.clientWidth;
	});
});
// 切换高度
$(function () {
	$(window).scroll(function() {
		var scrollTop=$(window).scrollTop();
		$(".allNav_list").css('display', 'none');
		if (scrollTop==0) {
			
			$(".logo").stop(true).animate({
				height: 120,
				width: 90},
				0);
			$(".logo a img").first().addClass('logo_img').removeClass('logo_img_small');
			$(".logo a img").last().addClass('logo_txt').removeClass('logo_txt_small');	
			$("#header").stop(true).animate({
				height: 80},
				500);
		}else{
			$("#header").stop(true).animate({
				height: 60},
				500);
			$("#header").animate({
				height: 60},
				500);
				/*$(".logo").css({
					height: '60',
					width: '120'
				});*/
			$(".logo").animate({
				height: 60,
				width: 120},
				10);
			// $(".logo a img").first().toggleClass('logo_img_small');
			// $(".logo a img").last().toggleClass('logo_txt_small');
			$(".logo a img").first().addClass('logo_img_small').removeClass('logo_img');
			$(".logo a img").last().addClass('logo_txt_small').removeClass('logo_txt');
		}
	});
});