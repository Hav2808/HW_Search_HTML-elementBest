const popupLoad = document.querySelector("#modal_main");
//console.log(popupLoad);
const wellDone = document.querySelector("#modal_success");
//console.log(wellDone);
const doWell = document.querySelector(".show-success"); //Сделать хорошо</a>
//console.log(doWell);
const closeModal = document.querySelectorAll(".modal__close_times"); //<div class="modal__close modal__close_times">&times;</div>
console.log(closeModal);
console.log("*********************************************************");

console.log(closeModal.length);
function showPopup() {
    popupLoad.classList.add("modal_active");
    console.log(popupLoad);
  }

function closePopup() { // крестик закрытия окон
    for (let i = 0; i < closeModal.length; i++) {
        let eachClose = closeModal[i];

        let closeFunc = () => {
            wellDone.style.display = "none";
            popupLoad.style.display = "none";
        };

        eachClose.onclick = closeFunc;
    }
}

doWell.onclick  = function successOpen() { 
    popupLoad.className = "modal"; //display = "none"
    wellDone.className = "modal modal_active"; //display = "flex"
};

showPopup();
closePopup();