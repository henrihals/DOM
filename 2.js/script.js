/* 
1/ Add a title attribute to every element that has the important class, stating This is an important item. 
Tip: adding a title attribute to an element is different from change a title of a document.

2/ Select all the img tags and loop through them. If they have no important class, 
turn their display property to none

3/ Loop through all the paragraphs and display their content in the console. 
If the paragraph has a class, display its classname has well

4/ Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.*/

let change = document.querySelectorAll('.important');
change.forEach(element => {     
    element.setAttribute('Title', 'This is an important item'); 
});

let img = document.querySelectorAll('img');

img.forEach(element => {
    if (!element.classList.contains("important")) {
        element.style.display = "none"
        }
    }
);

let ch = document.querySelectorAll('p');

ch.forEach(element => {
    if (!element.classList.contains("important")) {
        element.style.color = "#" + Math.floor(Math.random() * 10000)
        }
    }
);
