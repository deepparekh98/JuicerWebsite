$(document).ready(function() {

$("a").click(function() {

//$(this) represents current element, which is <a> right now

//$(this).prev() represent element before current element which is div

//On clicking a, use toggleClass method to toggle <div class="hide">

$(this).prev().toggleClass("hide");

if($(this).prev().hasClass("hide")){

$(this).text("Show more");

}else{

$(this).text("Show less");

}

});

});