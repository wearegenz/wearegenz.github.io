new WOW().init();

words = ['independent','disruptors', 'confident', 'progressive', 'inclusive', 'tolerant',
	'entrepreneurs', 'activists', 'leaders', 'innovators', 'world changers'];

var i = 0;
let rand = 0;
let w = 0;
var changeText = setInterval(() => {
		i = i % (words.length - 1);
		rand = Math.floor(Math.random() * 1000);
		console.log(rand);
		if (rand === 500) {
			w = 'ben.'
		} else if (rand === 501) {
			w = 'vivek.'
		} else {
			w = words[i]+"."
		}
		$("#textchanging").fadeOut("fast", () => {
			$("#textchanging").text(w);
		});
		$( "#textchanging").fadeIn("slow");
		i++;
}, 1500);

$(".more").toggle(function(){
	$(this).text("less..").siblings(".complete").show();
}, function(){
	$(this).text("more..").siblings(".complete").hide();
});