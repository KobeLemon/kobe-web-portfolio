function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}
const xBtn = document.getElementById("hamburgerBtn");
xBtn.onclick = toggleMenu;

document.getElementById("copyrightYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// console.log(`lastModified: ${document.getElementById("lastModified").textContent}`);