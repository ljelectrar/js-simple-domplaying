let elements = document.querySelectorAll('li.hot');

console.log("Hello World");

if (elements.length > 0){
    for (i = 0; i < elements.length - 2; i++){
        elements[i].className = "cold";
    }
}
