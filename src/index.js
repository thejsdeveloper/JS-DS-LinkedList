import "./styles.css";
import { LinkedList } from "./linkedlist";

document.getElementById("app").innerHTML = `
	<header class="container" id="header">
    <img src=${require("./assets/images/logo.png")} class="logo"/>
		<p class="title">LinkedList</p>
	</header>
  
    <div class="container column">
 
     <section class="description mt-2">
      <h3 >Methods in LinkedList</h3>
          <hr/>
      <ul class="list">
      <li><strong>add(element)</strong>: Takes an element and add it to the list</li>
      
      <li><strong>insertAt(element, index)</strong>: Adds the element at the specified index</li>
      
      <li><strong>addFirst(element)</strong>: Takes an element and add it to start of the list</li>
      
      <li><strong>addLast(element)</strong>: Takes an element and add it to end of the list</li>
      
      <li><strong>getAt(index)</strong>: Return the element at the specified index</li>
      
      <li><strong>indexOf(element)</strong>: Returns index of the passed the element. If the element do not exist in list it returns -1</li>
      
      <li><strong>removeAt(index)</strong>: Removes the element at the specified index and return the removed element</li>
      
      <li><strong>remove(element)</strong>: Removes the element if it exist in list and returned the removed element</li>
      
      <li><strong>size</strong>: A getter method which return size of the list</li>
      
      <li><strong>isEmpty()</strong>: Return true if list is empty otherwise return false</li>
      
      <li><strong>clear()</strong> Clears the list</li>
      
      <li><strong>toString()</strong> Return the string representation of the list</li>
	</ul>

 
     </section>

     <section class="note">
       <h2>To view the logs, please Open Console in the browser.</h2>
     </section>
    
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
  list.insertAt(18, list.size)
);
console.log("list.toString() => ", list.toString());
console.log("remove element 16 => ", list.remove(16));
console.log("list.toString() => ", list.toString());
console.log("remove element 11 => ", list.remove(11));
console.log("list.toString() => ", list.toString());
console.log("remove element 18 => ", list.remove(18));
console.log("list.toString() => ", list.toString());
