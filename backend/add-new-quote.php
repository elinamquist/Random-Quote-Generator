<?php
$jsonFile = 'js/primary-quotes.json';
$quotes = json_decode(file_get_contents($jsonFile), true);
$newData = [
        "img" => "someimgae",
        "quote" => "some powerful quote from nana",
        "author" => "Nana Osei",
        "bgColor" => "somecolor"
];

array_push($quotes, $newData);
var_dump($quotes);
var_dump(file_put_contents($jsonFile, json_encode($quotes, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)));
