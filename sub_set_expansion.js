$(document).ready(function() {
	$("a").click(function() {
	
	//Here,the $(this) shows us the current element,i.e <a>
	//And the $(this).prev() shows us the element before current element i.e div
	//Then after clicking <a>, use toggleClass method to toggle the <div class="hide">
	$(this).prev().toggleClass("hide");

	//Now we have to check if the div has class "hide". 
	//And If yes, change the text of $(this) which is <a> here,so to show more in it 
	//Or If not, then change the text to show less.

	if($(this).prev().hasClass("hide")){
	$(this).text("Show more");
	}else{
	$(this).text("Show less");
	}
  });
});