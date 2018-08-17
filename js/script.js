$("document").ready(function () {
	let quotes;
	let secondaryQuotes;
	let range;

	// Get primary and secondary quotes
	setTimeout(function() {
		$.get('js/primary-quotes.json', function (data) {
			quotes = data;
			range = quotes.length;
		});

		$.get('js/secondary-quotes.json', function (data) {
			secondaryQuotes = data;
		});
	}, 1000);


	// click event to generate random quotes from the quotes array
	$("#newQuotes").on("click", function () {
		var image = $(".quote-image").attr("src");				//get the value of the quote-image container.
		var randomNum = Math.floor(Math.random() * range);		//generates the random number

		//check to see if random image already exist,if so it replaces it with a different image.
		if (image === quotes[randomNum].img) {
			$("#body").addClass("fade");
			$(".quote-image").attr("src", secondaryQuotes[0].img);
			$("#author").text(secondaryQuotes[0].author);
			$(".quote").text(secondaryQuotes[0].quote);
			$("#body").css("background-color", secondaryQuotes[0].bgColor);

			setTimeout(function () {
				$("#body").removeClass("fade");
			}, 1500);
		} else {
			$("#body").addClass("fade");
			$(".quote-image").attr("src", quotes[randomNum].img);
			$(".quote").text(quotes[randomNum].quote);
			$("#author").text(quotes[randomNum].author);
			$("#body").css("background-color", quotes[randomNum].bgColor);

			//wait for 1.5s before remove the fade class from the body
			setTimeout(function () {
				$("#body").removeClass("fade");
			}, 1500);
		}
	});

	// Tweet out quote
	$("#twitter").on("click", function () {
		var tweetQuotes = $('.quote').text();
		var tweetAuthor = $('#author').text();
		window.open("http://www.twitter.com/intent/tweet?text=" + tweetQuotes + " by " + tweetAuthor);
	})
});
