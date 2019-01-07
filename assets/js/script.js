$("document").ready(function () {
	let mainQuotes, secondaryQuotes, range;

	// Wait for 1 sec after the window and DOM have finished
	// loading, then fetch the quotes using an ajax call.
	setTimeout(function() {
		$.get('storage/primary-quotes.json', function (data) {
			mainQuotes = data;
			range = mainQuotes.length;
		});

		$.get('storage/secondary-quotes.json', function (data) {
			secondaryQuotes = data;
		});
	}, 1000);


	// This function fetches a random quote from the storage
	// when the user clicks on the new quote button
	function useQuoteFrom(storage, quoteNumber) {
		quoteNumber =  quoteNumber === undefined ? 0 : quoteNumber;

		$("#body").addClass("fade");
		$(".quote-image").attr("src", storage[quoteNumber].img);
		$('.quote-image').attr('alt', 'Photo of ' + storage[quoteNumber].author);
		$("#author").text(storage[quoteNumber].author);
		$(".quote").text(storage[quoteNumber].quote);
		$("#body").css("background-color", storage[quoteNumber].bgColor);

		setTimeout(function () {
			$("#body").removeClass("fade");
		}, 1500);
	}

	// Click event to generate random quotes from the quotes array
	$("#newQuotes").on("click", function () {
		// Get the value of the quote-image container.
		var currentImage = $(".quote-image").attr("src");

		//Get the random number
		var randomNum = Math.floor(Math.random() * range);

		//check to see if random image already exist,
		//if so it replaces it with a different image.
		if (currentImage === mainQuotes[randomNum].img) {
			useQuoteFrom(secondaryQuotes);
		} else {
			useQuoteFrom(mainQuotes, randomNum);
		}
	});

	// Tweet out quote
	$("#twitter").on("click", function () {
		var tweetQuotes = $('.quote').text();
		var tweetAuthor = $('#author').text();
		window.open("http://www.twitter.com/intent/tweet?text=" + tweetQuotes + " by " + tweetAuthor);
	})
});
