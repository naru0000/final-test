// 1. 시간/분/초 입력할 수 있습니다.
// 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
// 3. Pause를 누르면 타이머가 멈춥니다.
// 4. 다시 Start를 누르면 재시작됩니다.
// 5. 0초가 되면 초기화 됩니다.
// 6. Reset을 누르면 초기화 됩니다.

const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let hrsCount = 0;
let minCount = 0;
let secCount = 0;
let count;

hrs.addEventListener("click", () => {
  hrs.innerHTML = hrsCount += 10;
});

min.addEventListener("click", () => {
  min.innerHTML = minCount += 10;
});

sec.addEventListener("click", () => {
  sec.innerHTML = secCount += 10;
});

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", () => {
  function removeCount() {
    hrsCount--;
  }

  setInterval(removeCount, 1000);
});
