var modal = document.getElementById("myModal");

var modalTriggers = document.getElementsByClassName("modaltrigger")
var modalTriggersOutline = document.getElementsByClassName("modaltriggerOutline")
var modalTriggersSquare = document.getElementsByClassName("modaltriggerSquare")
var modalTriggersVideo = document.getElementsByClassName("modaltriggerVideo")

var modalImg = document.getElementById("modalImg");
var modalVideo = document.getElementById("modalVideo");

for (var index = 0; index < modalTriggers.length; index++) {
  modalTriggers[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active");
  }
}

for (var index = 0; index < modalTriggersOutline.length; index++) {
  modalTriggersOutline[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active");
  }
}

for (var index = 0; index < modalTriggersSquare.length; index++) {
  modalTriggersSquare[index].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
    mybutton.classList.remove("active")
  }
}

for (var index = 0; index < modalTriggersVideo.length; index++) {
  modalTriggersVideo[index].onclick = function () {
    modal.style.display = "flex";
    modalVideo.src = this.firstElementChild.src;
    modalImg.style.display = "none"
    modalVideo.style.display = "block"
    mybutton.classList.remove("active");
  }
}

modal.onclick = function () {
  modal.style.display = "none";
  mybutton.classList.add("active");
}