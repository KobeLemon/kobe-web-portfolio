function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}
const xBtn = document.getElementById("hamburgerBtn");
xBtn.onclick = toggleMenu;
