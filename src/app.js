/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "a", "some", "another", "any"];
  let adjective = ["skinny", "tall", "pretty", "ugly", "funny"];
  let noun = ["doggo", "hamster", "guy", "cat"];
  let tdl = [".com", ".org", ".us", ".io", ".net"];

  let domainNames = [];

  for (let pronoun of pronoun) {
    for (let adjective of adjective) {
      for (let noun of noun) {
        for (let tdl of tdl) {
          domainNames.push(`${pronoun}${adjective}${noun}${tdl}`);
        }
      }
    }
  }
};
