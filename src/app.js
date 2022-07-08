/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-generator").innerHTML = domainGenerator();
  });
  console.log("You have create a domain");
};

let domainGenerator = () => {
  let pronoun = ["my", "your", "our", "his", "her"];
  let adjective = ["fast", "funny", "insane", "slow", "shinny"];
  let noun = ["nurse", "firefighter", "officer", "president", "father"];
  let extension = [".com", ".net", ".org", ".live", ".money"];

  let pro = Math.floor(Math.random() * pronoun.length);
  let adj = Math.floor(Math.random() * adjective.length);
  let noun1 = Math.floor(Math.random() * noun.length);
  let ext = Math.floor(Math.random() * extension.length);

  return pronoun[pro] + adjective[adj] + noun[noun1] + extension[ext];
};
