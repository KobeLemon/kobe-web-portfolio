// find the element with the id of "copyrightYear" & update the innerHTML element to show the current year dynamically
document.getElementById("copyrightYear").innerHTML = `${new Date().getFullYear()} | Kobe Lemon`;

// find the element with the id of "date" & update the innerHTML to show the document's last modified date/time
document.getElementById("lastModified").innerHTML = document.lastModified;