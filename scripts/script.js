let count = 0;
function iconHomeStyle() {
  let homeImg = document.getElementById('homeImg');
  let p = document.querySelector('div.home-block p');
  if (count === 0) {
    homeImg.setAttribute("src", "img/home.png");
    p.style = "color: #9FA5C0"
    count = 1;
  } else{
    homeImg.setAttribute("src", "img/home-active.png");
    p.style = "color: #16aa63"
    count = 0;
  }
}
function iconUploadStyle() {
  let uploadImg = document.getElementById('uploadImg');
  let p = document.querySelector('div.upload-block p');
  if (count === 0) {
    uploadImg.setAttribute("src", "img/upload-active.png");
    p.style = "color: #16aa63"
    count = 1;
  } else{
    uploadImg.setAttribute("src", "img/upload.png");
    p.style = "color: #9FA5C0"
    count = 0;
  }
}
