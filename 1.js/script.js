document.title = "Modifying the DOM";

document.body.style.backgroundColor = "#" + Math.floor(Math.random()* 255);

console.log(document.body); 

for (let element of document.body.children) {
    console.log(element);
  }
