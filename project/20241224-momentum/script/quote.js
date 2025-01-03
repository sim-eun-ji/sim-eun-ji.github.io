

const quotes = [
  {
    quote : "삶은 10%가 당신에게 일어나는 일이고, 90%는 당신이 그것에 반응하는 방식이다.",
    author : "찰스 R. 스윈돌"
  },
  {
    quote : "나는 실패한 것이 아니라 단지 1만 가지 잘못된 방법을 찾은 것이다.",
    author : "토머스 에디슨"
  },
  {
    quote : "어제에서 배우고, 오늘을 위해 살며, 내일을 위해 희망하라. 중요한 것은 질문을 멈추지 않는 것이다.",
    author : "알베르트 아인슈타인"
  },
  {
    quote : "네가 할 수 있다고 믿든 없다고 믿든, 네 믿는 대로 될 것이다.",
    author : "헨리 포드"
  },
  {
    quote : "희망은 아침을 여는 꿈이다.",
    author : "아리스토텔레스"
  }
];

const num = Math.floor(Math.random() * quotes.length);
const today = quotes[num];
const quote = document.querySelector('.quote > p:nth-child(1)');
const quotePlayer = document.querySelector('.quote > p:nth-child(2)')
quote.textContent = today.quote;
quotePlayer.textContent = `- ${today.author} -`;