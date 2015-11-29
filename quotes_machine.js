$(document).ready(function () {
    function generate() {
        var quotes = ["We live like zombies. We wake up, carry out habits and go to sleep only to wake up and do it again. You exist, but do you feel alive?@Unknown", "You can give a person knowledge, but you can't make them think. Some people want to remain fools, only because the truth requires change.@ThinkingHumanity.com", "The more wisdom you attain and the more conscious you become the crazier you will appear to others.@ThinkingHumanity.com"];
        
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        var quoteAuthor = randomQuote.split("@");
        
        var isNotFinished = true;
        while (isNotFinished) {
            if (typeof previousQuote !== 'undefined' && previousQuote === quoteAuthor[0]) {
                randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                quoteAuthor = randomQuote.split("@");
            } else {
                isNotFinished = false;
                $(".base").text(quoteAuthor[0]);
                $(".author").text(quoteAuthor[1]);  
            }
        }
    }
    generate();
  
    $(".button").on("click", function () {
        previousQuote = $(".base").text();
        generate();
    });
});