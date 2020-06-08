new WOW().init();

words = ['independent', 'confident', 'self-reliant', 'progressive', 'inclusive', 'tolerant', 
	'entrepreneurs', 'activists', 'justice', 'pursuers', 'leaders', 'innovators', 'world changers']

var i = 0;
var changeText = setInterval(() => {
		i = i % (words.length - 1);
		$("#textchanging").fadeOut("fast", () => {
			$("#textchanging").text(words[i]+".");
		});
		$( "#textchanging").fadeIn("slow");
		i++;
}, 1500)