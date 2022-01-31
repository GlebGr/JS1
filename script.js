document.querySelector('button').addEventListener('click', function() {
    var elementOne = document.getElementById('one');
    var elementTwo = document.getElementById('two');

    if (elementOne.classList.contains("yellow")) {
        elementOne.classList.remove("yellow");
        elementTwo.classList.add("white");
    } else {
        elementOne.classList.add("yellow");
        elementTwo.classList.remove("white");
    }
})