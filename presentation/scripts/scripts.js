function activateExample(exampleJS, exampleClass) {
    document.querySelectorAll(exampleJS).forEach(item =>
        item.classList.toggle(exampleClass)
    );
}

function activateShortLong() {
    document.querySelector(".shortJS").classList.toggle("shorthand");
    document.querySelector(".longJS").classList.toggle("longhand");
}