let quote = [
  "Life is pink-tastic when you're a Barbie girl in a Barbie world!",
  "\“If you haven’t failed yet, you haven’t tried anything.\” -Reshma Saujani, Founder of Girls Who Code",
  "\"Code like a silly girl in this silly world <3\" - Our Team", 
  "\"The word ‘female,’ when inserted in front of something, is always with a note of surprise. Female COO, female pilot, female surgeon — as if the gender implies surprise … One day there won’t be female leaders. There will just be leaders. \" - Sheryl Sandberg"
  
];
let currentQuoteIndex = 0;
function scrollThroughQuotes() {
  if (currentQuoteIndex < quote.length) {
    document.querySelector('.quote').innerText = quote[currentQuoteIndex];
    currentQuoteIndex++;
  } else {
    currentQuoteIndex = 0;
  }
}

setInterval(scrollThroughQuotes, 4000);