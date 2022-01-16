/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRamdon = Math.floor(Math.random() * who.length);
  let actionRamdon = Math.floor(Math.random() * action.length);
  let whatRamdon = Math.floor(Math.random() * what.length);
  let whenRamdon = Math.floor(Math.random() * when.length);

  return (
    who[whoRamdon] +
    " " +
    action[actionRamdon] +
    " " +
    what[whatRamdon] +
    " " +
    when[whenRamdon]
  );
}

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
