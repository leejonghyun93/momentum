const quotes = [
    {
        quote: "하나님께서 늘 사랑을 주신 것처럼 주는 사랑이 받는 사랑보다 더 복이 있습니다.",
        author: "어머니 교훈 중 첫 번째 교훈",
    },
    {
        quote: "하나님께 영광을 돌리면 그 영광은 결국 자신의 것이 됩니다.",
        author: "어머니 교훈 중 두 번째 교훈",
    },
    {
        quote: "아름답게 보는 마음은 미움이 없고 온전한 사랑을 이루게 합니다.",
        author: "어머니 교훈 중 세 번째 교훈",
    },
    {
        quote: "아브라함이 조카 롯에게 좋은 것을 양보했을 때 더 좋은 것으로 축복을 받았듯이 우리들도 형제들에게 좋은 것을 양보하면 더 좋은 축복을 받게 됩니다.",
        author: "어머니 교훈 중 네 번째 교훈",
    },
    {
        quote: "높은 마음이란 섭섭하게 느끼는 마음입니다.",
        author: "어머니 교훈 중 다섯 번째 교훈",
    },
    {
        quote: "다른 사람들이 일하지 않는다고 불평하지 말고 자신의 할 일에만 충성되게 합시다. 주인 된 마음으로 일하면 힘들지 않고 즐거운 마음으로 일할 수 있습니다.",
        author: "어머니 교훈 중 여섯 번째 교훈",
    },
    {
        quote: "불만이 가득 차면 교만이 생깁니다.늘 감사하는 마음으로 하나님을 섬기면 불만과 교만이 없어지고 겸손한 마음을 갖게 됩니다.",
        author: "어머니 교훈 중 일곱 번째 교훈",
    },
    {
        quote: "형제자매를 칭찬하면 내게 칭찬이 돌아옵니다.",
        author: "어머니 교훈 중 여덟 번째 교훈",
    },
    {
        quote: "바다가 모든 더러운 것을 받아 정화시키듯이 모든 형제자매들의 허물까지도 감싸줄 수 있는 바다같이 넓은 마음이 진정 아름다운 마음입니다.",
        author: "어머니 교훈 중 아홉 번째 교훈",
    },
    {
        quote: "어린양의 인도를 받기를 원하는 사람은 어린양보다 더 작은 양이 되어야 합니다.",
        author: "어머니 교훈 중 열 번째 교훈",
    },
    {
        quote: "희생은 큰 그릇이 되기 위해 요구되는 과정입니다.",
        author: "어머니 교훈 중 열한 번째 교훈",
    },
    {
        quote: "하나님은 섬기러 이 땅에 오셨습니다. 섬김받기를 원하지 않고 서로 섬기는 마음이 하나님께서 기뻐하시는 마음입니다.",
        author: "어머니 교훈 중 열두 번째 교훈",
    },
    {
        quote: "오늘의 고통을 참고 인내해야 함은 하늘나라가 내게 있기 때문입니다.",
        author: "어머니 교훈 중 열세 번째 교훈",
    },
]; // quote, author를 만들어 quotes에 저장

const quote = document.querySelector("#quote span:last-child"); // querySelector함수 통해서 #quote span:last-child 요소를 찾아 quote에 저장
const author = document.querySelector("#quote span:first-child"); // querySelector함수 통해서 #quote span:first-child 요소를 찾아 author에 저장

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; // 랜덤 함수를 만들고 todaysQuote에 저장

quote.innerText = todaysQuote.quote; // todaysQuote의 quote를 표시
author.innerText = todaysQuote.author; // todaysQuote의 author를 표시

  
