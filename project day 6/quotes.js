const quotes=[
    {
        quote:"Form is Temporary, Class is Permanent.",
        author:"Bill Shankly",
    },
    {
        quote:"Der Ball ist rund und ein Spiel dauert 90 Minuten.",
        author:"Sepp Herberger",
    },
    {
        quote:"But, I'm still hungry.",
        author:"Guus Hiddink",
    },
    {
        quote:"You have to fight to reach your dream. You have to sacrifice and work hard for it.",
        author:"Lionel Messi",
    },
    {
        quote:"The more difficult the victory, the greater the happiness in winning.",
        author:"Pele",
    },
    {
        quote:"Every disadvantage has got its advantage.",
        author:"Johan Cruyff",
    },
    {
        quote:"There is no pressure when you are making a dream come true.",
        author:"Neymar Jr.",
    },
    {
        quote:"Whatever brings you down will eventually make you stronger.",
        author:"Alex Morgan",
    },
    {
        quote:"I worked on my weaknesses and made them my strengths.",
        author:"Sydney Leroux",
    },
    {
        quote:"Losers complain, winners train.",
        author:"Jose Mourinho",
    },
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;