window.addEventListener("load", function () {
  const topBtn = this.document.querySelector(".top-btn");
  this.window.addEventListener("scroll", function () {
    // console.log("스크롤시작");
    if (this.document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
  topBtn.addEventListener("click" , function(){
    
  })
});
