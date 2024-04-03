const imgBox = document.querySelector("#img__box");  // querySelector함수 통해서 img__box 요소를 찾아 imgBox에 저장
const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg"]; // 이미지를 images 에 저장

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤 함수를 chosenImage에 저장

const bgImage = document.createElement("img"); // img요소를 만들어 bgImage에 저장

bgImage.src = `img/${chosenImage}`; // img__box > src에 랜덤 이미지를 보여준다.

document.body.appendChild(bgImage); // bgImage를 마지막에 자식에 붙인다.

imgBox.appendChild(bgImage);  // bgImage를 마지막에 자식에 붙인다.