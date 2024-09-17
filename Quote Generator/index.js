const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Get busy living or get busy dying. - Stephen King",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas Edison",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "Dream big and dare to fail. - Norman Vaughan",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Don’t wait. The time will never be just right. - Napoleon Hill",
  "The best way to predict the future is to invent it. - Alan Kay",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "It always seems impossible until it's done. - Nelson Mandela",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Act as if what you do makes a difference. It does. - William James",
  "The best revenge is massive success. - Frank Sinatra",
  "Opportunities don't happen, you create them. - Chris Grosser",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Great things never come from comfort zones. - Anonymous",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn",
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
  "Success seems to be connected with action. Successful people keep moving. - Conrad Hilton",
  "I never dreamed about success, I worked for it. - Estee Lauder",
  "Failure is another stepping stone to greatness. - Oprah Winfrey",
  "Things work out best for those who make the best of how things work out. - John Wooden",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Your life does not get better by chance, it gets better by change. - Jim Rohn",
  "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  "Do not be embarrassed by your failures, learn from them and start again. - Richard Branson",
  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe",
  "What we fear doing most is usually what we most need to do. - Tim Ferriss",
  "I have learned over the years that when one’s mind is made up, this diminishes fear. - Rosa Parks",
  "Don’t count the days, make the days count. - Muhammad Ali",
  "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
  "Success is how high you bounce when you hit bottom. - George S. Patton",
  "You must expect great things of yourself before you can do them. - Michael Jordan",
  "If you can dream it, you can do it. - Walt Disney",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "It does not matter how many times you get knocked down, but how many times you get up. - Vince Lombardi",
  "The secret of success is to do the common things uncommonly well. - John D. Rockefeller",
  "Success is a journey, not a destination. - Arthur Ashe",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
  "Don’t limit your challenges. Challenge your limits. - Anonymous",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "If you want to achieve greatness, stop asking for permission. - Anonymous",
  "Do what you love and the money will follow. - Marsha Sinetar",
  "The mind is everything. What you think you become. - Buddha",
  "Success is not measured by where you are in life, but the obstacles you’ve overcome. - Booker T. Washington",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Great works are performed not by strength but by perseverance. - Samuel Johnson",
  "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
  "Success is doing what you love and loving what you do. - Anonymous",
  "Aim for the moon. If you miss, you may hit a star. - W. Clement Stone",
  "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Do not let what you cannot do interfere with what you can do. - John Wooden",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "A winner is a dreamer who never gives up. - Nelson Mandela",
  "You can't build a reputation on what you are going to do. - Henry Ford",
  "Stay positive, work hard, make it happen. - Anonymous",
  "If opportunity doesn’t knock, build a door. - Milton Berle",
  "It’s not about having time, it’s about making time. - Anonymous",
  "Don’t stop when you’re tired. Stop when you’re done. - Anonymous",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair",
  "If you want something you’ve never had, you must be willing to do something you’ve never done. - Thomas Jefferson",
  "Don’t wish it were easier. Wish you were better. - Jim Rohn",
  "The harder you work for something, the greater you’ll feel when you achieve it. - Anonymous",
  "Success is not the absence of failure; it’s the persistence through failure. - Aisha Tyler",
  "Don’t stop until you’re proud. - Anonymous"
];


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
      usedIndexes.clear()
  }

  while (true) {
      const randomIdx = Math.floor(Math.random() * quotes.length)

      if (usedIndexes.has(randomIdx)) continue

      const quote = quotes[randomIdx]
      quoteElement.innerHTML = quote;
      usedIndexes.add(randomIdx)
      break
  }
}