const quotes = [
  {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other",
    author: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only",
    author: "Saint Augustine",
  },
  {
    quote: "늦었다고 생각이 들 때가 진짜 늦었다.",
    author: "박명수",
  },
  {
    quote: "대학가면 으로 시작하는 부모님의 말은 다 거짓말이다",
    author: "신명권",
  },
  {
    quote: "여친을 너무 많이 사귀어봐서 이젠 귀찮다",
    author: "김강호",
  },
  {
    quote: "안녕하세요 올리버쌤입니다. 와~ ",
    author: "올리버쌤",
  },
  {
    quote: "느그 서장 남천동 살제?",
    author: "최민식",
  },
  {
    quote: "갈땐 가더라도 담배 한 대 정돈 괜찮잖아?",
    author: "이중구",
  },
  {
    quote: "티끌 모아서 티끌",
    author: "불명",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todausQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todausQuotes.quote;
author.innerText = todausQuotes.author;
