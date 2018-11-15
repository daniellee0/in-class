let stylesheet = document.querySelector('[href*="css/none.css"]');

let h1 = document.querySelector('h1');
h1.addEventListener('click', function() {
    h1.style.fontSize  = "3em";
})

let button = document.querySelector('button');
button.addEventListener('click', function(){
    let message = "You clicked " + event.offsetX + " and " + event.offsetY;
    
    let clickedElement = event.target;
    
    console.log(message);
    console.log(event.target);
});

document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowUp') {
        document.querySelector('h2').style.fontSize = "5em";
    } else if (event.key === 'ArrowDown') {
        document.querySelector('h2').style.fontSize = "1em";
    }

});

function doSomething(item) {
    document.querySelector(`#${item}`).addEventListener('click', function(){
        stylesheet.setAttribute('href', `css/${item}.css`);
    });

}

let listItems = document.querySelectorAll(".styles li");
for (let i in Object.keys(listItems)) {
    doSomething(listItems[i].id);
}
