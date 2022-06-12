/* Display the document title in the console

1/ Change the document title to Modifying the DOM

2/ Change the background color of the body to hot pink (#FF69B4). 
If that worked, try with a random color as an extra challenge. 
(tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

3/Using the children method and a for ... of loop, display every children elements of the second child 
element of your document (display all children elements of the <body>)*/

document.title = "Modifying the DOM";

document.body.style.backgroundColor = "#" + Math.floor(Math.random()* 255);

console.log(document.body); 

for (let element of document.body.children) {
    console.log(element);
  }
