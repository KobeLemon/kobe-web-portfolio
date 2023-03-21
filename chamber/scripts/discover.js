let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits ==  0) {
    document.getElementById("label").textContent = ``;
    document.getElementById("visits").textContent = `This is your first visit!`;
} else {
    document.getElementById("visits").textContent = numVisits;
}

// increment the number of visits
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

const imagesToLoad = document.querySelectorAll("img[data-src]");
// console.log(imagesToLoad);

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, {threshold: 1, rootMargin: "500px"});

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}