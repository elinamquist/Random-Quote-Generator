$("document").ready(function(){

	// This is where all the random quotes are generated from.feel free to add yours too!
	var quotes=[
			{
				"img":"https://i1.sndcdn.com/avatars-000348015026-1slx46-t500x500.jpg",
				"quote":"The best feeling you can ever have is being yourself.",
				"author":"akan",
				"bgColor":"#D19072"
			},
			{
				"img":"http://thesource.com/wp-content/uploads/2017/10/Nina-Simone-is-Finally-Nominated-to-Rock-Roll-Hall-of-Fame.jpg",
				"quote":"You have to learn to get up from the table when love is not being served.",
				"author":"Nina Simone",
				"bgColor":"#FF8B9B"
			},
			{
				"img":"http://photos.myjoyonline.com/photos/news/201704/9956047341693_5383206976681.jpg",
				"quote":"I discovered there is nowhere cool so find your happiness where ever you dey.",
				"author":"m.anifest",
				"bgColor":"#BDD1E9"
			},
			{
				"img":"http://www.ctm-festival.de/fileadmin/user_upload/images/Artists/F/FoknBois-byAccraDotAlt-540x300.jpg",
				"quote":"The worst disability is to be crippled in your mind",
				"author":"FOKN Bois",
				"bgColor":"#923434"
			},
			{
				"img":"https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2017/11/worlasi.jpg?resize=463%2C500",
				"quote":"DON’T ignore yourself and impress others ,impress yourself and others will be impressed!",
				"author":"Worlasi",
				"bgColor":"#4D4C5C"
			}
	];

	// This is a scondary quote to replace a repeated quote
	var secondaryQuotes=[
			{
				"img":"http://mixmag.com.cn/wp-content/uploads/2018/02/640-2-5-1024x576.jpg",
				"quote":"Immerse yourself in the things you love and progress will come naturally",
				"author":"keyzuz",
				"bgColor":"#2A6472"
			}
	];
		
var range=quotes.length ;//Get the length of quotes array to set a range.

// click event to generate random quotes from the quotes array
$("#newQuotes").on("click",function(){
	var imageVal=$(".quote-image").attr("src");//get the value of the quote-image container.
	var randomNum=Math.floor(Math.random()*range);//generates the random number
	//check to see if random image already exist,if so it replaces it with a different image.
	if(imageVal===quotes[randomNum].img){
		$("#body").addClass("fade");
		$(".quote-image").attr("src",secondaryQuotes[0].img);
		$("#author").text(secondaryQuotes[0].author);
		$(".quote").text(secondaryQuotes[0].quote);
		$("#body").css("background-color",secondaryQuotes[0].bgColor);
			setTimeout(function(){
		  $("#body").removeClass("fade");
		 },1500);

	}else{
		 $("#body").addClass("fade");
		$(".quote-image").attr("src",quotes[randomNum].img);
		$(".quote").text(quotes[randomNum].quote);
		$("#author").text(quotes[randomNum].author);
		$("#body").css("background-color",quotes[randomNum].bgColor);
		//wait for 1.5s before remove the fade class from the body
		 setTimeout(function(){
		  $("#body").removeClass("fade");
		 },1500);
	}
	});
	
});