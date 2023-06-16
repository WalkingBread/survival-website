let contrastButton = document.querySelector(".toggle-high-contrast");

const setHighContrastRecursive = element => {
    element.classList.toggle("high-contrast");
    for(let child in element.children) {
        setHighContrastRecursive(child);
    }
};

contrastButton.addEventListener("click", function() {
    let body = document.getElementsByTagName("body")[0];
    setHighContrastRecursive(body);
});