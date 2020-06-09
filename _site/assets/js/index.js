new WOW().init();

words = ['', 'independent','disruptors', 'confident', 'progressive', 'inclusive', 'tolerant',
	'entrepreneurs', 'activists', 'leaders', 'innovators', 'world changers', 'Vivek', 'Ben', 'independent','disruptors', 'confident', 'progressive', 'inclusive', 'tolerant',
	'entrepreneurs', 'activists', 'leaders', 'innovators', 'world changers',];

var i = 0;
var changeText = setInterval(() => {
		i = i % (words.length - 1);
		$("#textchanging").fadeOut("fast", () => {
			$("#textchanging").text(words[i]+".");
		});
		$( "#textchanging").fadeIn("slow");
		i++;
}, 1500)

$(".more").toggle(function(){
	$(this).text("less..").siblings(".complete").show();
}, function(){
	$(this).text("more..").siblings(".complete").hide();
});