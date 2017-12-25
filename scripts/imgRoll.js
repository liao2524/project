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
	// var imgRoll=$imgRoll.get(0);
	// var imgRoll=document.getElementsByClassName("QR_code");
	// var imgHtml=imgRoll.innerHTML;
	var adTimer=null;
	var imgLfet=$imgRoll.position().left;
	// var imgHtml=$imgRoll.html();
	// alert(imgHtml);
	// alert(imgHtml);
	// $imgRoll.append(imgHtml);
	// alert(imgHtml);
	// imgRoll.innerHTML=imgRoll.innerHTML=imgRoll.innerHTML;
	// alert(imgHtml);
	setInterval(roll,2000);
	function roll() {
		if (imgLfet>-3755) {
			// imgLfet=imgLfet-755;
    			$imgRoll.animate({
				left: imgLfet},
				1000, function() {	
						imgLfet=imgLfet-755;
					  });
			// alert(imgLfet);
		}
		else{
				// alert(imgLfet);
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
			
			// $imgRoll.animate({
			// 	left: imgLfet},
			// 	0);
 

	// alert(imgLfet);
	// $imgRoll.trigger("setInterval");
	// $imgRoll.hover(function() {
	// 	if (adTimer) {
	// 		clearInterval(adTimer);
	// 	}
	// }, function() {
	// 	var adTimer=setInterval(function () {
	// 		$imgRoll.animate({
	// 			left: imgLfet},
	// 			1000, function() {	
	// 				// if (imgLfet>-3020) {
	// 				// 	imgLfet=imgLfet-755;
	// 				// }
	// 					imgLfet=imgLfet-755;
	// 		});
	// 	// if (imgLfet=-3020) {
	// 	// 		$imgRoll.css("left","0");
	// 	// 	}
	// 	// else{
	// 	// 	return;
	// 	// }	
	// 		// alert(imgLfet);

	// 	},2000);
	// });


});
