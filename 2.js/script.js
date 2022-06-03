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
