const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    changeText();
  }, 2000);
});

const changeText = () => {
  text.textContent = "ボタンをクリックしました";
};
