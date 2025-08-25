window.addEventListener("load", function () {
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
