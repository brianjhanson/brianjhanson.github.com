 $(document).ready(function() {
   var facts = [
   	"I kind of want to be a rapper.",
	  "I have jumped out of a plane.",
	  "I have been to China.",
	  "I love to solve problems.",
	  "I have traveled to Australia.",
	  "I lived in Rome for a semester.",
	  "I work at an advertising agency.",
	  "I would like to design a typeface.",
	  "I run 2 miles most days.",
     "I have been to 4 of 7 continents"
   ]

   var i = Math.floor(Math.random() * facts.length);
   var generate = function(){
   	if (i < facts.length - 1) {
   		i++
 		} else {
 			i = 0;
 		}
   	$(".fact").fadeOut(200, function(){
   		$('.fact').remove();
	   	$('<span class="fact">'+facts[i]+'</span>').prependTo('.facts');
   	});
   }

   $(".fact").remove();
   $('<span class="fact">'+facts[i]+'</span>').prependTo('.facts');

   $(".fact-spinner").click(generate);

 });