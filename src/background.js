const bgList = [
  "../images/random-bg-1.jpg",
  "../images/random-bg-2.jpg",
  "../images/random-bg-3.jpg",
  "../images/random-bg-4.jpg",
  "../images/random-bg-5.jpg",
  "../images/random-bg-6.jpg",
  "../images/random-bg-7.jpg",
  "../images/random-bg-8.jpg",
];

const getRandomBg = () => {
  const bg = document.createElement("div");
  const bgStyle = bg.style;
  const randomIndex = Math.floor(Math.random() * 8);
  bgStyle.content = "";
  bgStyle.backgroundImage = `url("${bgList[randomIndex]}")`;
  bgStyle.height = "100%";
  bgStyle.position = "absolute";
  bgStyle.top = "0px";
  bgStyle.right = "0px";
  bgStyle.bottom = "0px";
  bgStyle.left = "0px";
  bgStyle.opacity = "0.25";
  bgStyle.backgroundSize = "cover";

  document.body.before(bg);
};
getRandomBg();
