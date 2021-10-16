import "./styles.css";
import { LinkedList } from "./linkedlist";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const list = new LinkedList();

console.log("add element 15");
list.add(15);

console.log("list.indexOf(15) => ", list.indexOf(15));

console.log("add element 10");
list.add(10);

console.log("list.toString() => ", list.toString());
console.log("list.indexOf(10) => ", list.indexOf(10));

console.log("add element 13");
list.add(13);

console.log("list.toString() => ", list.toString());
console.log("list.indexOf(13) => ", list.indexOf(13));
console.log("list.indexOf(10) => ", list.indexOf(10));

console.log("add elements 11 and 12");
list.add(11);
list.add(12);

console.log("list.toString() => ", list.toString());
console.log("list.removeAt(1) => ", list.removeAt(1));
console.log("list.toString() => ", list.toString());
console.log("list.removeAt(3) => ", list.removeAt(3));
console.log("list.toString() => ", list.toString());

console.log("add element 14");
list.add(14);

console.log("list.toString() => ", list.toString());
console.log("insertAt element 16 pos 0 => ", list.insertAt(16, 0));
console.log("list.toString() => ", list.toString());
console.log("insertAt element 17 pos 1 => ", list.insertAt(17, 1));
console.log("list.toString() => ", list.toString());
console.log(
  "insertAt element 18 pos list.size() => ",
  list.insertAt(18, list.size())
);
console.log("list.toString() => ", list.toString());
console.log("remove element 16 => ", list.remove(16));
console.log("list.toString() => ", list.toString());
console.log("remove element 11 => ", list.remove(11));
console.log("list.toString() => ", list.toString());
console.log("remove element 18 => ", list.remove(18));
console.log("list.toString() => ", list.toString());
