function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

#easy {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border-color: black;
    background-color: red;
    font-size: 50px;
    color: white;
}