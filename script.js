const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you want to achieve greatness, stop asking for permission. - Unknown",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = quote;
  }