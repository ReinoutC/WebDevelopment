const setup = () => {

    let paragraphs = document.getElementsByClassName("belangrijk")
    paragraphs[0].classList.add("opvallend");
    paragraphs[1].classList.add("opvallend");

}
window.addEventListener("load", setup);