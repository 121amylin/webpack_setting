import "../scss/index.scss";
import "../db.json";

fetch("../db.json")
  .then((res) => {
    return res.json();
  })
  .then((resule) => {
    console.log(resule);
  });
