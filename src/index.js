import "./styles.css";
var percentage = document.getElementById("percentage");
var tph = document.documentElement.scrollHeight;
var vph = window.innerHeight;

window.addEventListener("scroll", function () {
  percentage.innerText = Math.round(
    (Math.round(this.pageYOffset) / (tph - vph)) * 100
  );
});
