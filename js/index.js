let introduce = document.querySelector(".modalWindow1");
let project = document.querySelector(".modalWindow2");
let study = document.querySelector(".modalWindow3");
let company = document.querySelector(".modalWindow4");

document.querySelector("#introduce").onclick = function() {
    introduce.style.display = "block";
}
document.querySelector("#project").onclick = function() {
    project.style.display = "block";
}
document.querySelector("#study").onclick = function() {
    study.style.display = "block";
}
document.querySelector("#company").onclick = function() {
    company.style.display = "block";
}
introduce.onclick = function() {
    introduce.style.display = "none";
}
project.onclick = function() {
    project.style.display = "none";
}
study.onclick = function() {
    study.style.display = "none";
}
company.onclick = function() {
    company.style.display = "none";
}