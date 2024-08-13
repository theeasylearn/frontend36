var express = require('express');
var app = express();
var continents = [
    {
        continent: "Africa",
        countries: ["Nigeria", "Ethiopia", "Egypt", "South Africa", "Kenya", "Morocco", "Ghana"]
    },
    {
        continent: "Asia",
        countries: ["China", "India", "Japan", "South Korea", "Indonesia", "Pakistan", "Thailand"]
    },
    {
        continent: "Europe",
        countries: ["Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Netherlands"]
    },
    {
        continent: "North America",
        countries: ["United States", "Canada", "Mexico", "Cuba", "Guatemala", "Honduras", "Panama"]
    },
    {
        continent: "South America",
        countries: ["Brazil", "Argentina", "Colombia", "Chile", "Peru", "Venezuela", "Uruguay"]
    },
    {
        continent: "Australia/Oceania",
        countries: ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Samoa", "Tonga", "Vanuatu"]
    },
    {
        continent: "Antarctica",
        countries: ["N/A"]  // Antarctica doesn't have countries, so it's represented as "N/A".
    }
];
app.get("/asia",function(request,response){
    let countries = continents[1]['countries'];
    response.json([{'countries':countries}]);
});
app.get("/affrica", function (request, response) {
    let countries = continents[0]['countries'];
    response.json([{ 'countries': countries }]);
});

app.all("*",function(request,response){
    response.json([{ 'error': 'no such route exist' }]);
});
app.listen(5000);
console.log('ready to accept request');