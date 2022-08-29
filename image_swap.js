/* image_swap.js */

$(document).ready(function(){
		// preload images
		$("#image_list a").each(function(){
			var swappedImage = new Image();
			swappedImage.src = $(this).attr("href");
		}); // end of image preload
		
		// set up event handlers for the links
		$("#image_list a").hover(
			function(evt){
				// animate thumbnail
				$(this).stop(true).animate({top: 15}, "fast");
				
				// swap image
				var imageURL = $(this).attr("href");
				$("#image").attr("src", imageURL);
				
				// swap caption
				var caption = $(this).attr("title");
				$("#caption").text(caption);
				
				// cancel default action
				evt.preventDefault();
			},
			function(evt){
				//animate thumbnail
				$(this).stop(true).animate({top:0}, "fast");
			}
		); // end hover
		
		// move focus to the 1st thumbnail
		$("image_list:first-child:first-child").focus();
				
}); // end of ready





