const setup = () => {
    let pElement=document.getElementById("txtOutput");
    if(window.confirm("wilt u de tekst aanpassen?")){
        pElement.innerHTML="Welkom!";
    }
}
window.addEventListener("load", setup);