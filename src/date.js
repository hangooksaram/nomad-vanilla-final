const dateEl = document.getElementById("date");

const date = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const sec = new Date().getSeconds();

  const current = `${year}.${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  dateEl.innerText = current;
};

setInterval(() => {
  date();
}, 1000);
