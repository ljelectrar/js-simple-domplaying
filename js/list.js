let elements = document.querySelectorAll('li.hot');

console.log("Hello World");

if (elements.length > 0){
    for (i = 0; i < elements.length; i++){
        if(i % 2 == 0){
            elements[i].className = "cold";
        } 
    }
}
