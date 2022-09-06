const daysPH = document.querySelector("#days");
const hoursPH = document.querySelector("#hours");
const minutesPh = document.querySelector("#minutes");
const secondsPH = document.querySelector("#seconds");

const newYearDate = new Date("Jan 1, 2023 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
  const currentDate = new Date().getTime();
  const gap = newYearDate - currentDate;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  daysPH.innerText = d;
  hoursPH.textContent = h;
  minutesPh.textContent = m;
  secondsPH.textContent = s;

  setTimeout(() => {
    updateCountDown();
  }, 1000);
}
