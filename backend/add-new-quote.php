<?php
// Path to the JSON file (obviously)
$jsonFile = '../js/primary-quotes.json';

// Convert the contents into an array. Just like JSON.parse() in JS
$quotes = json_decode(file_get_contents($jsonFile), true);

// This is just dumb data to represent the data that will be submitted
// by whoever is adding a new quote. This might need some validation or
// sanitization.
$newQuote = [
        "img" => "someimgae",
        "quote" => "some powerful quote from nana",
        "author" => "Nana Osei",
        "bgColor" => "someStrangeColor"
];

// Add the new quote to the quotes
$quotes[] = $newQuote;

// Encode the new quotes into JSON format and save the file
$quotes = json_encode($quotes, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
file_put_contents($jsonFile, $quotes, LOCK_EX);
