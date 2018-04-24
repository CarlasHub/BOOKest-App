

// toggle read check mark
$('.toggle-read').on("click", function(e) {
  // remove check class and add display-revert and vice versa
  $(this).children().toggleClass('check display-revert');
  // parent container will ignore the child click event
  $(this).parent(".book").toggleClass('read-status');
});

// remove book from list
$('.remove').on("click", function() {
  $(this).parent().fadeOut(500, function(){
  	$(this).remove();
  });
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// extract the value of input 
		var titlesInput = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li class='book'><span class='remove'> <i class='fas fa-trash-alt'></i></span>"  + titlesInput + "<i class='fas fa-share-square'></i><span class='toggle-read'><div class='check'>✓</div></span></li>");
	}

});


$(".fa-plus").click(function(){
   var titlesInput = $("input[type='text']").val();
  if(event){
    $("ul").append("<li class='book'><span class='remove'> <i class='fas fa-trash-alt'></i></span>"  + titlesInput + "<i class='fas fa-share-square'></i><span class='toggle-read'><div class='check'>✓</div></span></li>");
}
});









//dynamically attaching event handlers to newly created elements
var books = $('.book').getElementsByTagName('li');
      
// For each <li> inside #links
for (var i = 0; i < books.length; i++) {
  var books = [i];
  link.onclick = myFunction;
}



