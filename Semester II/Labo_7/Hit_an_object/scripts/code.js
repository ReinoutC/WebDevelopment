


const setup = () => {

    let btnStart=document.getElementById("btnStart");
    btnStart.addEventListener("click", speelSpel);
};

let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const moveTarget = () => {

    let imageList = ["images/0.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png"];
    let target=document.getElementsByClassName("target")[0];
    target.src = imageList[Math.round(Math.random()*(imageList.length-1))];

    let playField=document.getElementById("playField");
    let maxLeft=playField.clientWidth - target.offsetWidth;
    let maxHeight=playField.clientHeight - target.offsetHeight;

    // verplaats de target
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";
}


const punt = () =>{
    score++
}

const speelSpel = ()=> {
    let bom = false;
    let tskld = setInterval(moveTarget, 3000);
    score = 0;
    while(!bom){
        let target=document.getElementsByClassName("target")[0];
        target.addEventListener("click", moveTarget);
        target.addEventListener("click", punt);
        if(){}
    }
    clearInterval(tskld);
}

window.addEventListener("load", setup);


