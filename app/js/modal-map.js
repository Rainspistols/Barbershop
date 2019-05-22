var hfuBtn = document.querySelector(".Hfu-js");
var modalMap = document.querySelector(".modal-map");
var closeBtn = modalMap.querySelector(".modal-close");


hfuBtn.addEventListener("click", function (evt) {
  event.preventDefault();
  modalMap.classList.add("js_modal-show");
})

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("js_modal-show");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode===27) {
    evt.preventDefault();

    if (modalMap.classList.contains("js_modal-show")) {
      modalMap.classList.remove("js_modal-show")
    }
  }
})
