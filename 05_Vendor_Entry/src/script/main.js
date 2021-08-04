import "@babel/polyfill"; //如果沒有引入 @babel/polyfill 會報錯 Uncaught ReferenceError: regeneratorRuntime is not defined
import axios from "axios";
let res1 = null;
let res2 = null;
async function asyncFun() {
  let res1 = await axios
    .get("https://jsonplaceholder.typicode.com/todos/5")
    .then((res) => {
      console.log(res);
      res1 = res.data;
    });
  let res2 = await axios
    .get("https://jsonplaceholder.typicode.com/todos/3")
    .then((res) => {
      console.log(res);
      res2 = res.data;
    });
}
asyncFun();
