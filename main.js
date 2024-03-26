function toggleAnswer(icon) {
    var blockBox = icon.parentElement.parentElement; // Get the parent block-box element
    var answer = blockBox.querySelector(".content"); // Find the corresponding answer
    var plusIcon = blockBox.querySelector(".plus"); // Find the corresponding plus icon
    var minusIcon = blockBox.querySelector(".minus"); // Find the corresponding minus icon

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
    } else {
        answer.style.display = "none";
        plusIcon.style.display = "inline";
        minusIcon.style.display = "none";
    }
}
